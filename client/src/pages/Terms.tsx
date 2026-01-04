import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";

export default function Terms() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Navbar hideLinks={true} />

            <main className="pt-32 pb-16 container mx-auto px-4 max-w-4xl">
                <SectionHeading
                    align="left"
                    label="Legal"
                    title="Terms and Conditions"
                    description="Please read these terms carefully before using our services."
                />

                <div className="prose prose-invert max-w-none space-y-8 mt-12 text-muted-foreground">
                    <section>
                        <h3 className="text-2xl font-bold text-white mb-4">Welcome</h3>
                        <p>
                            Welcome to Neural Learning Hub. By accessing or using our website and services, you agree to be bound by these Terms and Conditions.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-2xl font-bold text-white mb-4">Eligibility</h3>
                        <p>
                            You must be at least 18 years old to use our services. By enrolling in our courses, you represent and warrant that you meet this requirement.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-2xl font-bold text-white mb-4">Payment and Access</h3>
                        <p>
                            Course fees must be paid in full prior to accessing the materials, unless a payment plan has been agreed upon. All prices are subject to change without notice.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-2xl font-bold text-white mb-4">Refunds and Cancellations</h3>
                        <p>
                            Please refer to our specific Refund Policy page or contact support for details regarding course cancellations and refund eligibility.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-2xl font-bold text-white mb-4">Course Access</h3>
                        <p>
                            Upon enrollment, you are granted a non-exclusive, non-transferable license to access the course materials for your personal educational use only.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-2xl font-bold text-white mb-4">Privacy Policy</h3>
                        <p>
                            Your use of our website is also governed by our Privacy Policy, which explains how we collect, use, and protect your information.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-2xl font-bold text-white mb-4">Customer Service</h3>
                        <p>
                            If you have any questions or concerns, please contact our support team at team@neurallearninghub.in.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-2xl font-bold text-white mb-4">Disclaimers and Limitations of Liability</h3>
                        <p>
                            Our courses are provided "as is" without warranties of any kind. Neural Learning Hub shall not be liable for any indirect, incidental, or consequential damages.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-2xl font-bold text-white mb-4">Changes to Terms and Conditions</h3>
                        <p>
                            We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-2xl font-bold text-white mb-4">Governing Law and Dispute Resolution</h3>
                        <p>
                            These terms shall be governed by the laws of India. Any disputes arising out of these terms shall be subject to the exclusive jurisdiction of the courts in Bangalore, India.
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
