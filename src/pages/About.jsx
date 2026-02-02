import Container from '../components/common/Container';
import Tabs from '../components/common/Tabs';
import History from '../components/about/History';
import Mission from '../components/about/Mission';
import Values from '../components/about/Values';
import Leadership from '../components/about/Leadership';
import Doctrine from '../components/about/Doctrine';

export default function About() {
  const tabs = [
    {
      label: 'Overview',
      content: (
        <section className="bg-white py-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              {/* Church Building Image */}
              <div className="order-2 md:order-1">
                <div className="aspect-[4/3] rounded-2xl shadow-xl overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}images/gallery/church-building.webp`}
                    alt="Gospel Light Eritrean Baptist Church Building"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Welcome Text */}
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-heading font-bold mb-6">
                  Welcome to Gospel Light
                </h2>
                <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
                  Gospel Light Eritrean Baptist Church is a vibrant community of believers
                  in Dallas, Texas, dedicated to worshiping God, growing in faith, and
                  serving others.
                </p>
                <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                  We are a family of faith from diverse backgrounds, united by our love
                  for Jesus Christ and our commitment to sharing His Gospel with the
                  Eritrean community and beyond.
                </p>
                <div className="bg-primary-50 border-l-4 border-primary-500 p-4 rounded-r-lg">
                  <p className="text-neutral-700 italic">
                    "For where two or three gather in my name, there am I with them."
                  </p>
                  <p className="text-sm text-neutral-600 mt-2 font-semibold">
                    — Matthew 18:20
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="text-center p-6 bg-neutral-50 rounded-xl">
                <div className="text-3xl font-bold text-primary-600 mb-2">35+</div>
                <div className="text-sm text-neutral-600">Years Serving</div>
              </div>
              <div className="text-center p-6 bg-neutral-50 rounded-xl">
                <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-sm text-neutral-600">Members</div>
              </div>
              <div className="text-center p-6 bg-neutral-50 rounded-xl">
                <div className="text-3xl font-bold text-primary-600 mb-2">10+</div>
                <div className="text-sm text-neutral-600">Ministries</div>
              </div>
              <div className="text-center p-6 bg-neutral-50 rounded-xl">
                <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
                <div className="text-sm text-neutral-600">Faith Focused</div>
              </div>
            </div>

            {/* Pastoral Welcome Message */}
            <div className="bg-gradient-to-br from-primary-50 to-white p-8 md:p-12 rounded-2xl shadow-lg border border-primary-100">
              <h2 className="text-3xl font-heading font-bold text-center mb-8 text-neutral-900">
                Pastoral Welcome Message
              </h2>

              <div className="grid md:grid-cols-3 gap-8 items-start mb-8">
                {/* Pastor Image */}
                <div className="md:col-span-1 flex justify-center">
                  <div className="w-48 h-48 rounded-full overflow-hidden shadow-xl border-4 border-white">
                    <img
                      src={`${import.meta.env.BASE_URL}images/leadership/pastor-biniam-asefaw.jpg`}
                      alt="Pastor Biniam Asefaw"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Message Content */}
                <div className="md:col-span-2 space-y-4 text-neutral-700 leading-relaxed">
                  <p>
                    Welcome to the Gospel Light Eritrean Baptist Church! We are grateful to invite you to be part takers of the bliss of the truth of Christ. It is an impression of our heart to welcome you in hospitality as it is a divine assignment of the body of Christ. Whether this is a one-time visit, or you regularly enjoy the resources available here, or you are looking for a church home, we want you to know that we are honored to serve you on behalf of Christ.
                  </p>
                  <p>
                    Utmost of all, we hope you sense in these pages the heart of our church. We exist to worship God, to exalt His Son and our Lord Jesus Christ, to foster and care for one another, and to share the good news about the forgiveness of sins found in Christ alone. We also trust that our firm confidence in God's Word is evident. Because we believe the Bible is the only God's inspired and inerrant Word to us, Scripture is our ultimate authority. It determines our faith and our practice as our divine bread. In the worship services and throughout every ministry, you will discover that our central message is the same--the Word of God, nothing more or less.
                  </p>
                  <p>
                    Here at Gospel Light Eritrean Baptist Church, we are attempting to connect people with God and His son, Jesus Christ through the power of Holy Spirit. Our passionate desire is for people to come to this church and experience a genuine, real, life-changing encounter with God. Our hope is that through our lively worship music, our caring fellowship, and our timely and relevant messages from God's Word, you will come to know God in an unutterable way.
                  </p>
                  <p>
                    Thanks again for visiting us today. If you have come to know God through the sacrifice of His Son, it's our prayer that He will extend His grace to you and peace through our Lord Jesus Christ.
                  </p>
                  <div className="pt-4">
                    <p className="font-semibold italic text-neutral-900">In Christ,</p>
                    <p className="font-semibold text-primary-700 text-lg mt-1">Pastor Biniam Asefaw</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ),
    },
    {
      label: 'Mission & Values',
      content: (
        <div>
          <Mission />
          <Values />
        </div>
      ),
    },
    {
      label: 'History',
      content: <History />,
    },
    {
      label: 'Doctrine',
      content: <Doctrine />,
    },
    {
      label: 'Leadership',
      content: <Leadership />,
    },
  ];

  return (
    <div className="bg-neutral-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <Container>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            About Us
          </h1>
          <p className="text-xl text-primary-50 max-w-2xl">
            Learn about our history, mission, and the people who make Gospel Light
            Eritrean Baptist Church a welcoming community of faith.
          </p>
        </Container>
      </div>

      {/* Tabbed Content */}
      <section className="section-padding">
        <Container>
          <Tabs tabs={tabs} />
        </Container>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Join Our Church Family
            </h2>
            <p className="text-xl text-primary-50 mb-8">
              Whether you're looking for a church home or just want to visit, we'd love to
              meet you. Come experience the warmth of our fellowship and the power of worship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
                Plan Your Visit
              </a>
              <a href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
                Contact Us
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
