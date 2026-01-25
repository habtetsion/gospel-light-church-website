import Container from '../components/common/Container';
import Card from '../components/common/Card';
import { HiUserGroup, HiHeart, HiBookOpen, HiMusicNote, HiUsers, HiAcademicCap } from 'react-icons/hi';

export default function Ministries() {
  const ministries = [
    {
      name: 'Worship Ministry',
      description: 'Leading our congregation in heartfelt worship and praise through music, prayer, and the arts.',
      icon: HiMusicNote,
      color: 'from-purple-400 to-purple-600',
    },
    {
      name: 'Children\'s Ministry',
      description: 'Nurturing the spiritual growth of our children through engaging Bible lessons, worship, and activities.',
      icon: HiUserGroup,
      color: 'from-blue-400 to-blue-600',
    },
    {
      name: '220 @ Gospel Light',
      description: 'Empowering youth and young adults English speakers to know Christ, grow in faith, and make a difference in their community.',
      icon: HiUsers,
      color: 'from-green-400 to-green-600',
    },
    {
      name: 'Women\'s Ministry',
      description: 'Building sisterhood through Bible study, fellowship, and serving one another in love.',
      icon: HiHeart,
      color: 'from-pink-400 to-pink-600',
    },
    {
      name: 'Men\'s Ministry',
      description: 'Equipping men to be godly leaders in their homes, churches, and communities.',
      icon: HiAcademicCap,
      color: 'from-indigo-400 to-indigo-600',
    },
    {
      name: 'Bible Study',
      description: 'Growing deeper in God\'s Word through weekly Bible study and small group fellowship.',
      icon: HiBookOpen,
      color: 'from-amber-400 to-amber-600',
    },
  ];

  return (
    <div className="bg-neutral-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <Container>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our Ministries
          </h1>
          <p className="text-xl text-primary-50 max-w-2xl">
            Discover the many ways you can serve, grow, and connect with others at Gospel Light Eritrean Baptist Church.
          </p>
        </Container>
      </div>

      {/* Ministries Section */}
      <section className="section-padding">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Get Involved
            </h2>
            <p className="text-lg text-neutral-600">
              Whether you're looking to serve, grow in your faith, or connect with others, there's a place for you in our ministry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((ministry, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${ministry.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <ministry.icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-bold text-neutral-900 mb-3">
                    {ministry.name}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-600 leading-relaxed">
                    {ministry.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-primary-50 to-white p-8 md:p-12 rounded-2xl shadow-lg border border-primary-100 text-center">
              <h2 className="text-3xl font-heading font-bold mb-4 text-neutral-900">
                Ready to Get Involved?
              </h2>
              <p className="text-lg text-neutral-700 mb-6">
                We believe every person has unique gifts and talents that can be used to serve God and others. Whether you're experienced or just getting started, we'd love to help you find your place in ministry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="btn-primary">
                  Contact Us
                </a>
                <a href="/about" className="btn-outline">
                  Learn More About Us
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Ministry Opportunities */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-center mb-8">
              More Ways to Serve
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-soft">
                <h3 className="text-xl font-heading font-semibold mb-3 text-neutral-900">
                  Hospitality Team
                </h3>
                <p className="text-neutral-600">
                  Welcome guests and members with a warm smile, help with seating, and ensure everyone feels at home.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-soft">
                <h3 className="text-xl font-heading font-semibold mb-3 text-neutral-900">
                  Prayer Ministry
                </h3>
                <p className="text-neutral-600">
                  Intercede for our church, community, and world. Join our prayer team and make a difference through prayer.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-soft">
                <h3 className="text-xl font-heading font-semibold mb-3 text-neutral-900">
                  Media & Technology
                </h3>
                <p className="text-neutral-600">
                  Use your technical skills to support our services through audio, video, and online streaming.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-soft">
                <h3 className="text-xl font-heading font-semibold mb-3 text-neutral-900">
                  Community Outreach
                </h3>
                <p className="text-neutral-600">
                  Serve our local community through food distribution, visitation, and compassion ministries.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
