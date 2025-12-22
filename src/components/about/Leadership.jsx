import Container from '../common/Container';
import Card from '../common/Card';
import { HiMail } from 'react-icons/hi';

export default function Leadership() {
  const leaders = [
    {
      name: 'Pastor Name',
      role: 'Senior Pastor',
      bio: 'Pastor [Name] has been leading Gospel Light Eritrean Baptist Church since [year]. He is passionate about teaching God\'s Word and shepherding the congregation.',
      email: 'pastor@example.com',
      image: null, // Add image path when available
    },
    {
      name: 'Elder Name',
      role: 'Elder',
      bio: 'Serving as an elder, [Name] provides spiritual guidance and oversight for our church family.',
      email: null,
      image: null,
    },
    {
      name: 'Deacon Name',
      role: 'Deacon',
      bio: '[Name] serves as a deacon, coordinating practical ministry and care for our congregation.',
      email: null,
      image: null,
    },
    {
      name: 'Worship Leader Name',
      role: 'Worship Leader',
      bio: '[Name] leads our worship team, helping the congregation engage in heartfelt praise and worship.',
      email: null,
      image: null,
    },
  ];

  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Our Leadership
          </h2>
          <p className="text-lg text-neutral-600">
            Meet the dedicated servants who lead and shepherd our church family.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <Card key={index} className="text-center">
              {/* Photo Placeholder */}
              <div className="mb-4">
                {leader.image ? (
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full mx-auto bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
              </div>

              {/* Name and Role */}
              <h3 className="text-lg font-heading font-bold text-neutral-900 mb-1">
                {leader.name}
              </h3>
              <p className="text-primary-600 font-semibold text-sm mb-3">
                {leader.role}
              </p>

              {/* Bio */}
              <p className="text-neutral-600 text-sm mb-4">
                {leader.bio}
              </p>

              {/* Contact */}
              {leader.email && (
                <a
                  href={`mailto:${leader.email}`}
                  className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 text-sm font-medium"
                >
                  <HiMail className="w-4 h-4" />
                  <span>Contact</span>
                </a>
              )}
            </Card>
          ))}
        </div>

        {/* Join the Team */}
        <div className="mt-12 text-center">
          <div className="bg-neutral-50 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-heading font-bold mb-3">
              Interested in Serving?
            </h3>
            <p className="text-neutral-600 mb-4">
              We're always looking for passionate believers to join our ministry teams.
              Whether in worship, children's ministry, outreach, or other areas, there's a place for you to serve.
            </p>
            <a href="/contact" className="btn-primary inline-block">
              Get Involved
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
