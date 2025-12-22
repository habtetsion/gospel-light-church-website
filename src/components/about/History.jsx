import Container from '../common/Container';

export default function History() {
  const timeline = [
    {
      year: '2010',
      title: 'Church Founded',
      description: 'Gospel Light Eritrean Baptist Church was established in Dallas, TX, with a small group of believers committed to worship and fellowship.',
    },
    {
      year: '2012',
      title: 'First Building',
      description: 'The congregation grew and we moved into our first permanent location, expanding our ministry and outreach programs.',
    },
    {
      year: '2015',
      title: 'Youth Ministry Launch',
      description: 'Started dedicated youth programs to minister to the next generation and help young people grow in their faith.',
    },
    {
      year: '2018',
      title: 'Community Outreach',
      description: 'Expanded our community service programs, serving hundreds of families through food distribution and support services.',
    },
    {
      year: '2020',
      title: 'Online Ministry',
      description: 'Launched online streaming services and digital ministry to reach more people with the Gospel message.',
    },
    {
      year: '2024',
      title: 'Continued Growth',
      description: 'Our church continues to grow, with multiple ministries serving the Eritrean community and beyond in Dallas.',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-6">
            Our History
          </h2>
          <p className="text-lg text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
            Since our founding, God has been faithful to grow and strengthen our church community.
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform md:-translate-x-1/2"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Year Badge */}
                  <div className="absolute left-8 md:left-1/2 w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-lg transform md:-translate-x-1/2 z-10 shadow-lg">
                    {item.year}
                  </div>

                  {/* Content */}
                  <div className={`ml-28 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-neutral-50 p-6 rounded-xl shadow-soft">
                      <h3 className="text-xl font-heading font-bold text-neutral-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-neutral-600">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
