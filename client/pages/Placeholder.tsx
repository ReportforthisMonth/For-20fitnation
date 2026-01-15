import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

interface PlaceholderProps {
  title: string;
  description?: string;
}

export default function Placeholder({ title, description }: PlaceholderProps) {
  return (
    <div className="min-h-screen bg-gym-dark flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center pt-[125px] pb-20">
        <div className="text-center px-8">
          <h1 className="text-white text-[77px] font-heading mb-8" style={{ textShadow: '0 0 29px rgba(255, 255, 255, 0.30)' }}>
            {title}
          </h1>
          <div className="w-[300px] h-[4px] bg-gym-blue mx-auto mb-8"></div>
          <p className="text-gym-gray text-[19px] font-body font-medium max-w-2xl mx-auto">
            {description || 'This page is coming soon. Continue prompting to fill in this page content!'}
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
