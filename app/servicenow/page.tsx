import { Metadata } from 'next';
import CTASection from '../components/Home/CTASection';
import ServiceNowContent from './Servicenowcontent';


export const metadata: Metadata = {
  title: "ServiceNow Implementation & Consulting | Saasverse",
  description:
    "Saasverse delivers ServiceNow implementation, customization & integration — ITSM, ITOM & HRSD workflows that streamline enterprise operations. Get a quote.",
  alternates: { canonical: 'https://www.saasverse.in/servicenow' },
};

export default function ServiceNowPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-200 overflow-hidden">
      <ServiceNowContent />
      <CTASection />
    </div>
  );
}