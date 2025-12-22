import Container from '../common/Container';
import Card from '../common/Card';
import { HiBookOpen, HiHeart, HiUserGroup, HiLightBulb, HiGlobe, HiSparkles } from 'react-icons/hi';

export default function Values() {
  const values = [
    {
      icon: HiBookOpen,
      title: 'Biblical Authority',
      description: 'We believe the Bible is God\'s inspired Word and the final authority for faith and practice.',
    },
    {
      icon: HiHeart,
      title: 'Grace & Truth',
      description: 'We extend God\'s grace while upholding truth, creating a welcoming environment for all.',
    },
    {
      icon: HiUserGroup,
      title: 'Community',
      description: 'We value authentic relationships and fellowship, supporting one another in love.',
    },
    {
      icon: HiLightBulb,
      title: 'Growth',
      description: 'We encourage spiritual growth through prayer, study, and obedience to God\'s Word.',
    },
    {
      icon: HiGlobe,
      title: 'Mission',
      description: 'We are committed to sharing the Gospel locally and globally, making disciples of all nations.',
    },
    {
      icon: HiSparkles,
      title: 'Excellence',
      description: 'We strive for excellence in all we do, offering our best to honor God.',
    },
  ];

  return (
    <section className="section-padding bg-neutral-50">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Our Core Values
          </h2>
          <p className="text-lg text-neutral-600">
            These principles guide our ministry and shape our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold text-neutral-900 mb-3">
                {value.title}
              </h3>
              <p className="text-neutral-600">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
