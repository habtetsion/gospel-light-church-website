import Container from '../components/common/Container';
import Card from '../components/common/Card';
import { HiCash, HiMail } from 'react-icons/hi';
import { SiZelle, SiPaypal } from 'react-icons/si';

export default function Giving() {
  const givingMethods = [
    {
      name: 'Zelle',
      description: 'Send your gift instantly using Zelle to our church email.',
      email: 'gospellight@gmail.com',
      icon: SiZelle,
      color: 'from-purple-400 to-purple-600',
    },
    {
      name: 'PayPal',
      description: 'Give securely online through PayPal.',
      link: 'https://www.paypal.com',
      icon: SiPaypal,
      color: 'from-blue-400 to-blue-600',
    },
    {
      name: 'Check',
      description: 'Mail your check to our church address.',
      address: '11110 Garland Rd, Dallas, TX 75218',
      icon: HiMail,
      color: 'from-green-400 to-green-600',
    },
    {
      name: 'Cash or Check',
      description: 'Give during our Sunday worship service or Friday prayer meeting.',
      icon: HiCash,
      color: 'from-amber-400 to-amber-600',
    },
  ];

  const supportAreas = [
    {
      title: 'Ministry & Missions',
      description: 'Supporting our local and global outreach efforts to spread the Gospel.',
    },
    {
      title: 'Facility & Operations',
      description: 'Maintaining our building and resources to serve the congregation and community.',
    },
    {
      title: 'Children & Youth Programs',
      description: 'Investing in the next generation through education and discipleship.',
    },
    {
      title: 'Community Outreach',
      description: 'Providing assistance to those in need through our compassion ministries.',
    },
  ];

  return (
    <div className="bg-neutral-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <Container>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Give
          </h1>
          <p className="text-xl text-primary-50 max-w-2xl">
            Thank you for your generosity in supporting the ministry of Gospel Light Eritrean Baptist Church.
          </p>
        </Container>
      </div>

      {/* Biblical Foundation */}
      <section className="section-padding bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                The Joy of Giving
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Giving is an act of worship and an expression of our gratitude to God for His abundant blessings.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-lg">
                <p className="text-neutral-700 italic mb-3">
                  "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
                </p>
                <p className="text-sm text-neutral-600 font-semibold">— 2 Corinthians 9:7</p>
              </div>
              <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-lg">
                <p className="text-neutral-700 italic mb-3">
                  "Honor the Lord with your wealth, with the firstfruits of all your crops."
                </p>
                <p className="text-sm text-neutral-600 font-semibold">— Proverbs 3:9</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl shadow-lg border border-primary-100">
              <h3 className="text-2xl font-heading font-bold mb-4 text-neutral-900">
                Why We Give
              </h3>
              <ul className="space-y-3 text-neutral-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 mt-1">•</span>
                  <span>To worship God and acknowledge Him as the source of all our blessings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 mt-1">•</span>
                  <span>To support the ongoing work of the church and its ministries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 mt-1">•</span>
                  <span>To participate in God's work of reaching the lost and caring for those in need</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 mt-1">•</span>
                  <span>To grow in our trust and dependence on God</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Ways to Give */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Ways to Give
              </h2>
              <p className="text-lg text-neutral-600">
                Choose the giving method that works best for you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {givingMethods.map((method, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col">
                    {/* Icon and Title */}
                    <div className="flex items-center mb-4">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${method.color} flex items-center justify-center mr-4 shadow-lg`}>
                        <method.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-heading font-bold text-neutral-900">
                        {method.name}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-neutral-600 mb-4">
                      {method.description}
                    </p>

                    {/* Details */}
                    {method.email && (
                      <div className="bg-neutral-50 p-3 rounded-lg">
                        <p className="text-sm text-neutral-600 mb-1">Send to:</p>
                        <p className="font-semibold text-primary-700">{method.email}</p>
                      </div>
                    )}
                    {method.link && (
                      <a
                        href={method.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-block text-center"
                      >
                        Give with PayPal
                      </a>
                    )}
                    {method.address && (
                      <div className="bg-neutral-50 p-3 rounded-lg">
                        <p className="text-sm text-neutral-600 mb-1">Mail to:</p>
                        <p className="font-semibold text-neutral-900">{method.address}</p>
                        <p className="text-sm text-neutral-600 mt-2">
                          Make checks payable to: Gospel Light Eritrean Baptist Church
                        </p>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* What Your Giving Supports */}
      <section className="section-padding bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                What Your Giving Supports
              </h2>
              <p className="text-lg text-neutral-600">
                Your generous contributions help us fulfill our mission and serve our community.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {supportAreas.map((area, index) => (
                <div key={index} className="bg-neutral-50 p-6 rounded-xl shadow-soft">
                  <h3 className="text-xl font-heading font-bold text-neutral-900 mb-3">
                    {area.title}
                  </h3>
                  <p className="text-neutral-600">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Additional Info */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-primary-50 to-white p-8 md:p-12 rounded-2xl shadow-lg border border-primary-100">
              <h2 className="text-2xl font-heading font-bold mb-4 text-neutral-900 text-center">
                Questions About Giving?
              </h2>
              <p className="text-neutral-700 text-center mb-6">
                If you have any questions about giving or would like to discuss other ways to support our ministry, please don't hesitate to contact us.
              </p>
              <div className="text-center">
                <a href="/contact" className="btn-primary inline-block">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
