import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AlertTriangle } from "lucide-react";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <AlertTriangle className="h-6 w-6 text-primary" />
            </div>
            <h1 className="font-display text-4xl font-bold">Disclaimer</h1>
          </div>
          <p className="text-muted-foreground mb-8">Last Updated: February 5, 2026</p>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <section className="bg-card border border-border rounded-2xl p-6">
              <h2 className="font-display text-2xl font-semibold mb-4 text-primary">Important Notice</h2>
              <p className="text-foreground leading-relaxed">
                Please read this disclaimer carefully before using our website or services. By accessing 
                this website, you acknowledge that you have read, understood, and agree to be bound by 
                this disclaimer. This notice contains important information about the nature of our 
                business operations.
              </p>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-semibold mb-4">Third-Party Service Provider</h2>
              <p className="text-muted-foreground leading-relaxed">
                USA Security Cameras operates as a third-party service facilitator. We connect customers 
                with independent security camera product manufacturers, installers, and service providers. 
                We do not manufacture, sell, or directly install security equipment. Our role is to provide 
                information, facilitate connections, and coordinate services between customers and 
                independent providers in our network.
              </p>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-semibold mb-4">Self-Service Platform</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This website serves as a self-service informational platform. Users are responsible for:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Conducting their own research and due diligence before making any purchasing decisions</li>
                <li>Verifying the credentials and qualifications of any service providers</li>
                <li>Understanding local regulations regarding surveillance equipment installation</li>
                <li>Ensuring they have proper authorization to install cameras on their property</li>
                <li>Making informed decisions based on their own assessment of needs and requirements</li>
              </ul>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-semibold mb-4">No Official Authorization or Endorsement</h2>
              <p className="text-muted-foreground leading-relaxed">
                USA Security Cameras is not affiliated with, endorsed by, or authorized by any government 
                agency, law enforcement entity, or official security organization. We do not provide 
                official security certifications or government-mandated surveillance services. Any claims 
                regarding security effectiveness are based on general industry standards and should not 
                be interpreted as guarantees of protection against criminal activity.
              </p>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-semibold mb-4">Independent Contractor Relationships</h2>
              <p className="text-muted-foreground leading-relaxed">
                Installation technicians and service providers accessible through our platform operate as 
                independent contractors and are not employees of USA Security Cameras. We do not control 
                the methods, schedules, or specific practices of these independent providers. While we 
                strive to connect customers with qualified professionals, we cannot guarantee the quality, 
                timeliness, or outcome of services performed by independent contractors.
              </p>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-semibold mb-4">No Guarantee of Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                While security cameras can serve as deterrents and provide surveillance capabilities, 
                no security system can guarantee complete protection against theft, vandalism, or other 
                criminal activities. The effectiveness of any security solution depends on numerous factors 
                including proper installation, maintenance, monitoring, and response protocols. Users 
                should not rely solely on camera systems for security and should implement comprehensive 
                security measures appropriate to their specific circumstances.
              </p>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-semibold mb-4">Information Accuracy</h2>
              <p className="text-muted-foreground leading-relaxed">
                The information provided on this website is for general informational purposes only. 
                While we endeavor to keep the information up to date and accurate, we make no representations 
                or warranties of any kind, express or implied, about the completeness, accuracy, reliability, 
                suitability, or availability of the information, products, services, or related graphics 
                contained on the website. Product specifications, features, and pricing are subject to 
                change without notice.
              </p>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-semibold mb-4">Legal Compliance Responsibility</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Users are solely responsible for ensuring their use of security cameras complies with all 
                applicable laws and regulations, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Federal, state, and local privacy laws</li>
                <li>Recording consent requirements</li>
                <li>Workplace surveillance regulations</li>
                <li>Homeowners association rules</li>
                <li>Audio recording laws and two-party consent requirements</li>
                <li>Data protection and storage regulations</li>
              </ul>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall USA Security Cameras, its owners, operators, employees, or affiliates 
                be liable for any direct, indirect, incidental, special, consequential, or punitive damages 
                arising out of or in connection with your use of this website or services facilitated 
                through our platform. This includes, without limitation, damages for loss of profits, 
                data, property, or other intangible losses, even if we have been advised of the possibility 
                of such damages.
              </p>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-semibold mb-4">External Links Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                This website may contain links to external websites that are not provided or maintained by 
                or in any way affiliated with USA Security Cameras. Please note that we do not guarantee 
                the accuracy, relevance, timeliness, or completeness of any information on these external 
                websites. The inclusion of any links does not necessarily imply a recommendation or 
                endorsement of the views expressed within them.
              </p>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-semibold mb-4">Changes to This Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify this disclaimer at any time without prior notice. Changes 
                will be effective immediately upon posting to the website. Your continued use of the 
                website following any changes indicates your acceptance of the modified disclaimer. We 
                encourage you to review this disclaimer periodically for any updates.
              </p>
            </section>
            
            <section className="bg-secondary/50 border border-border rounded-2xl p-6">
              <h2 className="font-display text-xl font-semibold mb-4">Acknowledgment</h2>
              <p className="text-muted-foreground leading-relaxed">
                By using this website and our services, you acknowledge that you have read this disclaimer, 
                understood its contents, and agree to be bound by its terms. If you do not agree with any 
                part of this disclaimer, you must discontinue use of our website and services immediately.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Disclaimer;
