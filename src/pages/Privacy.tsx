import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-display text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last Updated: February 5, 2026</p>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="font-display text-2xl font-semibold mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                USA Security Cameras ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website or use our services. Please read this privacy policy carefully. 
                If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-semibold mb-4">Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect information about you in various ways, including:
              </p>
              <h3 className="font-display text-xl font-semibold mb-2">Personal Data</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you voluntarily provide it, we may collect personally identifiable information 
                such as your name, email address, and any other contact or other information you choose 
                to provide when requesting information about our services or submitting inquiries.
              </p>
              <h3 className="font-display text-xl font-semibold mb-2">Derivative Data</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our servers automatically collect information when you access our website, such as your 
                IP address, browser type, operating system, access times, and the pages you have viewed 
                directly before and after accessing the website.
              </p>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-semibold mb-4">Use of Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may use the information we collect about you to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Respond to your inquiries and fulfill your requests</li>
                <li>Provide, maintain, and improve our services</li>
                <li>Send you marketing and promotional communications (with your consent)</li>
                <li>Monitor and analyze usage patterns and trends</li>
                <li>Protect against fraudulent, unauthorized, or illegal activity</li>
                <li>Comply with legal obligations and enforce our policies</li>
              </ul>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-semibold mb-4">Disclosure of Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may share information we have collected about you in certain situations:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Business Transfers:</strong> If we undergo a merger, acquisition, or sale of assets, your information may be transferred</li>
                <li><strong>Service Providers:</strong> We may share information with third parties that perform services for us</li>
                <li><strong>Legal Requirements:</strong> We may disclose information where required by law or to protect our rights</li>
                <li><strong>With Your Consent:</strong> We may disclose information for any other purpose with your consent</li>
              </ul>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may use cookies, web beacons, tracking pixels, and other tracking technologies on our 
                website to help customize the site and improve your experience. When you access our website, 
                your personal information is not collected through the use of tracking technology. Most 
                browsers are set to accept cookies by default. You can remove or reject cookies, but be 
                aware that such action could affect the availability and functionality of the site.
              </p>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-semibold mb-4">Security of Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use administrative, technical, and physical security measures to help protect your 
                personal information. While we have taken reasonable steps to secure the personal information 
                you provide to us, please be aware that despite our efforts, no security measures are perfect 
                or impenetrable, and no method of data transmission can be guaranteed against any interception 
                or other type of misuse.
              </p>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-semibold mb-4">Third-Party Websites</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites and applications of interest. Once you 
                have used these links to leave our site, any information you provide to these third parties 
                is not covered by this Privacy Policy. We cannot guarantee the safety and privacy of your 
                information on third-party sites and encourage you to review their privacy policies.
              </p>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-semibold mb-4">Your Privacy Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>The right to access personal information we hold about you</li>
                <li>The right to request correction of inaccurate personal information</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to opt-out of marketing communications</li>
                <li>The right to data portability in certain circumstances</li>
              </ul>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-semibold mb-4">Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly 
                collect personal information from children under 18. If you become aware that a child 
                has provided us with personal information, please contact us. If we become aware that 
                we have collected personal information from children without verification of parental 
                consent, we take steps to remove that information from our servers.
              </p>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page and updating the "Last Updated" date. You are 
                advised to review this Privacy Policy periodically for any changes. Changes to this Privacy 
                Policy are effective when they are posted on this page.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
