import Container from '../common/Container';

export default function History() {
  const timeline = [
    {
      year: '1988',
      title: 'Prayer Beginnings',
      description: 'A few brothers began meeting and praying in a private house, seeking guidance on how to reach Eritrean people in Dallas with the Gospel.',
    },
    {
      year: '1991',
      title: 'First Worship Meeting',
      description: 'On May 7, 1991, Alemseged Mekonnen dedicated his house for worship. The first meeting\'s text was Proverbs 1:7: "The fear of the Lord is the beginning of knowledge."',
    },
    {
      year: '1992',
      title: 'First Conference & Pastor',
      description: 'The church organized its first conference in May and Pastor Solomon Beraki became the official pastor in September, moving from San Jose, California.',
    },
    {
      year: '1993',
      title: 'Mount Lebanon Conference',
      description: 'Started the Mount Lebanon Eritrean Ministers Conference with 19 ministers, which grew to serve ministers throughout North America.',
    },
    {
      year: '1994',
      title: 'Wilshire Baptist Church',
      description: 'Wilshire Baptist Church provided a meeting place where Gospel Light grew tremendously for 13 years.',
    },
    {
      year: '1995',
      title: 'First Self-Organized Conference',
      description: 'Gospel Light held its first conference independently, establishing the tradition of annual Thanksgiving week conferences.',
    },
    {
      year: '2006',
      title: 'Permanent Home',
      description: 'Dallas Baptist Association awarded the 8,700 sq. ft. Lochwood Baptist Church building to Gospel Light, a miraculous provision from God.',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-6">
            Our History
          </h2>
          <p className="text-lg text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
            From humble beginnings in 1988 to a thriving community today, God has been faithful in growing and strengthening Gospel Light Eritrean Baptist Church.
          </p>

          {/* Detailed History */}
          <div className="prose prose-lg max-w-none mb-16">
            <div className="bg-neutral-50 p-8 rounded-2xl shadow-soft">
              <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-6">The Beginning (1988-1991)</h3>
              <p className="text-neutral-700 mb-4">
                Starting from 1988, a few brothers were meeting and praying in a private house. Their main prayer was how to reach the Eritrean people who live in Dallas and surrounding areas by the Gospel of our Lord Jesus Christ.
              </p>
              <p className="text-neutral-700 mb-4">
                When the due time of God arrived, on May 7, 1991, one of the brothers by the name of Alemseged Mekonnen, suggested that he willed to dedicate his house for prayer and worship meeting. From this time they started to meet at his house every Friday at 7:00PM. They were worshiping the Lord and studying the Word of God together. On the first day of their meeting, their Bible text was from Proverbs 1:7: "The fear of the Lord is the beginning of knowledge." And also on that day they agreed to fast and pray for three days in order to get guidance from the Lord.
              </p>
              <p className="text-neutral-700">
                After a little while, they moved to another house of brother Alem Afeworki. Even though their number was small, they were paying their tithes and offering, and organized themselves by appointing Elders, treasurers, preachers, teachers and worship leaders.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-2xl shadow-soft mt-8">
              <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-6">Growth and Organization (1992-1995)</h3>
              <p className="text-neutral-700 mb-4">
                In 1992, Pastor Zeleke Alemu, who was pastoring a church in Denver, Colorado, had a burden in his heart to start an Eritrean Fellowship in Dallas. When he shared this with the believers, they told him they had already started to meet, and he was pleased. Pastor Zeleke suggested calling for a conference, assuring them he would cover the expenses.
              </p>
              <p className="text-neutral-700 mb-4">
                After discussion and prayer, they agreed to call for a conference on May 21-23, 1992. The conference was held at a Presbyterian Church on Oak Lawn Avenue and Cross Over Ministry on Maple Avenue. Pastors Solomon Beraki from San Jose, California, and Desta Haregot from Stockholm, Sweden were invited. About 30 people attended, and Brother Abraham Habte from Sweden covered all expenses. From this time on, people started to attend and join the fellowship.
              </p>
              <p className="text-neutral-700 mb-4">
                Based on 2 Corinthians 4:4, the fellowship chose "Gospel Light Eritrean Church" as their name. Pastor Zeleke helped secure sponsorship from the Baptist General Conference of Texas (BGCT), Lake Side Baptist Church, Park Cities Baptist Church, and Wilshire Baptist Church to support the church until it could be self-sustaining.
              </p>
              <p className="text-neutral-700 mb-4">
                Pastor Solomon Beraki accepted the call to be the church's pastor and moved from San Jose, California in September 1992, becoming the official pastor of Gospel Light Eritrean Baptist Church.
              </p>
              <p className="text-neutral-700">
                In 1994, Wilshire Baptist Church provided a meeting place, where Gospel Light remained for 13 years with full freedom. The church grew tremendously, with people from all over Dallas accepting Jesus as their Savior. In 1995, Gospel Light held its first self-organized conference, establishing the tradition of annual Thanksgiving week conferences that continues today.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-2xl shadow-soft mt-8">
              <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-6">Ministry Expansion (1993-2006)</h3>
              <p className="text-neutral-700 mb-4">
                In May 1993, the Mount Lebanon Conference of Ministers was started with about 19 ministers attending. This conference grew to serve ministers throughout the United States and Canada, providing seminars and workshops to empower and train ministers for effective community ministry.
              </p>
              <p className="text-neutral-700 mb-4">
                As the church continued to grow, leaders began praying and discussing the possibility of having a new building. The congregation welcomed the idea and started collecting contributions through various means, including selling T-shirts, lotteries, and seeking help from individuals and churches. Dallas Baptist Association (DBA), BGCT, and partner churches encouraged Gospel Light in this vision.
              </p>
              <p className="text-neutral-700">
                In June 2006, Dallas Baptist Association awarded the 8,700 sq. ft. building to Gospel Light Eritrean Baptist Church. This was a miraculous provision - with the money Gospel Light had, it was unthinkable to buy this building, but with God nothing is impossible. On August 19, 2006, around 132 members of Wilshire Baptist Church, together with the Gospel Light congregation, made a campaign for cleaning and maintenance of the building, completing work that saved thousands of dollars.
              </p>
            </div>

            <div className="bg-primary-50 p-8 rounded-2xl shadow-soft mt-8 border-l-4 border-primary-500">
              <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-6">Our Gratitude</h3>
              <p className="text-neutral-700 mb-4">
                We are deeply thankful to Lochwood Baptist Church, the original owners of our building. They not only kept and handed over this building to us, but also entrusted us with the responsibility to carry on their vision of reaching the lost, to the Glory of God, and to carry the torch of the Gospel to our community.
              </p>
              <p className="text-neutral-700 mb-4">
                Every member of Gospel Light Eritrean Baptist Church knows that we didn't receive only the building from them, but the responsibility to extend God's kingdom in this area. We are committed to this vision.
              </p>
              <p className="text-neutral-700 italic font-semibold">
                May the Lord Jesus Christ be praised forever and ever.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative mt-16">
            <h3 className="text-2xl font-heading font-bold text-center mb-12">Key Milestones</h3>
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
