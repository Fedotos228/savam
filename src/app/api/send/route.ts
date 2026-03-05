import { SelectedService } from '@/context/service-context'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const services: SelectedService[] = await req.json();

    if (!services || services.length === 0) {
      return NextResponse.json({ error: 'Lista de servicii este goală' }, { status: 400 });
    }

    const servicesListHtml = services.map((s: SelectedService) => `
      <div style="border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 20px; font-family: sans-serif; background-color: #ffffff;">
        <h2 style="margin-top: 0; color: #1e293b; border-bottom: 2px solid #3b82f6; padding-bottom: 8px;">
          ${s.title}
        </h2>
        <ul style="list-style: none; padding: 0; margin: 0; color: #475569;">
          <li style="margin-bottom: 8px;"><strong>Client:</strong> ${s.fullName}</li>
          <li style="margin-bottom: 8px;"><strong>Telefon:</strong> ${s.phone}</li>
          <li style="margin-bottom: 8px;"><strong>Adresă:</strong> ${s.address}</li>
          <li style="margin-bottom: 8px;"><strong>Suprafață:</strong> ${s.surface} m²</li>
          <li style="margin-bottom: 8px;"><strong>Preț:</strong> ${s.price} €/h</li>
          ${s.comment ? `<li style="margin-top: 12px; padding: 10px; background: #f8fafc; border-left: 4px solid #cbd5e1;">
            <strong>Comentariu:</strong> <em>${s.comment}</em>
          </li>` : ''}
        </ul>
      </div>
    `).join('');

    const { data, error } = await resend.emails.send({
      from: 'Savam App <onboarding@resend.dev>',
      to: ['savamcleaning@gmail.com'],
      subject: `🔔 Cerere Nouă: ${services.length} ${services.length === 1 ? 'serviciu' : 'servicii'}`,
      html: `
        <div style="background-color: #f1f5f9; padding: 20px; font-family: sans-serif;">
          <div style="max-width: 600px; margin: 0 auto;">
            <h1 style="color: #0f172a; text-align: center;">Ai primit o cerere nouă!</h1>
            <p style="text-align: center; color: #64748b; margin-bottom: 30px;">Mai jos găsești detaliile pentru serviciile selectate de client.</p>
            
            ${servicesListHtml}
            
            <div style="text-align: center; margin-top: 30px; font-size: 12px; color: #94a3b8;">
              Acest email a fost generat automat de platforma ta.
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    console.error("API Error:", err);
    return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 });
  }
}