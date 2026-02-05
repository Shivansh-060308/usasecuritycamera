import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-display text-4xl font-bold mb-8">Terms and Conditions</h1>
          <p className="text-muted-foreground mb-8">Last Updated: February 5, 2026</p>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="font-display text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using the USA Security Cameras website and services, you acknowledge 
                that you have read, understood, and agree to be bound by these Terms and Conditions. 
                If you do not agree to these terms, please discontinue use of our services immediately. 
                These terms apply to all visitors, users, and others who access or use our services.
              </p>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-semibold mb-4">2. Description of Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                USA Security Cameras provides information about security camera products, installation 
                services, and related surveillance solutions. Our website serves as an informational 
                platform and facilitates connections between customers and service providers. We reserve 
                the right to modify, suspend, or discontinue any aspect of our services at any time 
                without prior notice.
              </p>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-semibold mb-4">3. User Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When using our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Provide accurate and complete information when requested</li>
                <li>Maintain the confidentiality of any account credentials</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not interfere with or disrupt our services or servers</li>
                <li>Comply with all applicable local, state, and federal laws regarding surveillance equipment</li>
                <li>Obtain necessary permissions before installing security cameras on any property</li>
              </ul>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-semibold mb-4">4. Product Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                While we strive to provide accurate and up-to-date information about security camera 
                products and services, we do not warrant that product descriptions, pricing, or other 
                content on our website is accurate, complete, reliable, current, or error-free. Product 
                specifications and availability may vary. Images shown are for illustrative purposes 
                and may differ from actual products.
              </p>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-semibold mb-4">5. Installation Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Free installation is subject to terms and conditions that may vary based on location, 
                product selection, and availability. Installation services are provided by qualified 
                technicians and are subject to scheduling availability. Customers are responsible for 
                ensuring proper access to installation sites and obtaining any necessary permissions 
                from property owners or local authorities.
              </p>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-semibold mb-4">6. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on this website, including but not limited to text, graphics, logos, images, 
                and software, is the property of USA Security Cameras or its content suppliers and is 
                protected by United States and international copyright laws. Unauthorized reproduction, 
                distribution, or modification of any content is strictly prohibited.
              </p>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the fullest extent permitted by applicable law, USA Security Cameras shall not be 
                liable for any indirect, incidental, special, consequential, or punitive damages, 
                including without limitation, loss of profits, data, use, goodwill, or other intangible 
                losses, resulting from your access to or use of or inability to access or use the services.
              </p>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-semibold mb-4">8. Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to defend, indemnify, and hold harmless USA Security Cameras, its affiliates, 
                licensors, and service providers from and against any claims, liabilities, damages, 
                judgments, awards, losses, costs, expenses, or fees arising out of or relating to your 
                violation of these Terms and Conditions or your use of the services.
              </p>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-semibold mb-4">9. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms and Conditions shall be governed by and construed in accordance with the 
                laws of the United States, without regard to its conflict of law provisions. Any legal 
                action or proceeding arising under these Terms shall be brought exclusively in the 
                federal or state courts located in the United States.
              </p>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-semibold mb-4">10. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify or replace these Terms and Conditions at any time at our 
                sole discretion. It is your responsibility to review these Terms periodically for changes. 
                Your continued use of our services following the posting of any changes constitutes 
                acceptance of those changes.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
