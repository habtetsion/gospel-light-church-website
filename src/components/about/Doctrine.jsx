import { useState } from 'react';
import Container from '../common/Container';

export default function Doctrine() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const doctrines = [
    {
      title: '1. The Scriptures Inspired',
      content: 'We believe that all Scripture, both the Old and New Testaments, are verbally inspired of God and are the revelation of God to man, the infallible, authoritative rule of faith and conduct (2 Timothy 3:15-17; 1 Thess. 2:13; 2 Peter 1:21).',
    },
    {
      title: '2. The Godhead',
      content: (
        <>
          <p className="mb-4">We believe in one God, the living and true God, existing eternally in three Persons - the Father, the Son, and the Holy Spirit - each having precisely the same nature, attributes, and perfections (Matthew 28:18-19; Mark 12:29; John 1:14; Acts 5:3-4; II Corinthians 13:14; Hebrews 1:1-3; Revelation 1:4-6).</p>

          <h4 className="font-semibold text-lg mb-2 mt-4">God the Father</h4>
          <p className="mb-4">We believe that God the Father, unlimited in holiness, power and majesty, especially showed His exceedingly great love in giving His only beloved Son to redeem man from sin for eternal fellowship with Him. This act of grace was carried out according to His eternal, sovereign plan. The nature of the Father is completely and perfectly revealed in the Son (Genesis 3:15; Isaiah 53:1-10; John 3:16; 14:6-9; Romans 16:20; Colossians 1:15, 18-20).</p>

          <h4 className="font-semibold text-lg mb-2 mt-4">God the Son</h4>
          <p className="mb-4">We believe that Jesus Christ is the eternal Son of God, became man without ceasing to be God and continues to be the God-Man forever. We believe that He was born of the virgin Mary, having been conceived by the Holy Spirit, entered into human flesh in order that He might reveal God and redeem sinful man. We believe that His death on the cross was a substitutionary sacrifice for the sins of all men and that His bodily resurrection from the dead guaranteed redemption and salvation to all those who believe. We also believe that He later ascended into heaven exalted at the right hand of God where He is our High Priest and Advocate (John 1:1, 14, 18; Luke 1:35; Romans 3:24-26; 4:25; Ephesians 1:20-21; Hebrews 4:14; Philippians 2:9-10; Colossians 1:17-19; Hebrews 1:3; 3:1; 7:23-25; 9:24; 12:2; I John 2:1-2).</p>

          <h4 className="font-semibold text-lg mb-2 mt-4">God the Holy Spirit</h4>
          <p>We believe that the Holy Spirit, the third Person of the Godhead, eternal in being, took up His abode in the world to reveal and glorify Christ and to apply the saving work of Christ to men. Beginning on the day of Pentecost, according to the divine promise, the Holy Spirit never departs from the church, nor from the feeblest of believers, but indwells and seals the believer unto the day of redemption. We believe that His abode in the world in this special sense will cease when Christ comes to receive His own at the completion of the church (John 14:16-17; 16:7-15; I Corinthians 6:19; Ephesians 1:13; 2:22; II Thessalonians 2:7).</p>
        </>
      ),
    },
    {
      title: '3. Man',
      content: 'We believe that man was created in the image of God, but fell through sin against God, which brought mankind into a state of sin, separation from God, and subject to the power of Satan. We also believe that every child of Adam is born into the world with a nature, which not only possesses no spark of divine life, but also is totally depraved apart from divine grace. Man can only obtain spiritual life and salvation through the Redeemer, Jesus Christ (Genesis 1:26; 2:17; 5:3; 6:5; Psalms 14:1-3; 51:5; Jeremiah 17:9; John 3:6; 5:40; 6:53; Romans 3:10-18; 8:6-7; Ephesians 2:1-3; I Timothy 5:6; I John 3:8).',
    },
    {
      title: '4. The Salvation of Man',
      content: 'We believe that salvation is the gift of God in grace and is received by man only through personal faith in the Lord Jesus Christ, whose precious blood was shed for the forgiveness of our sins (John 1:12; Ephesians 1:7; 2:8-9). We believe that regeneration is a supernatural work of the Holy Spirit by which the divine nature and divine life are given (John 3:3-7; Titus 3:5). It is instantaneous and is accomplished solely by the power of the Holy Spirit through the instrumentality of the Word of God (John 5:24), when the repentant sinner, as enabled by the Holy Spirit (Eph. 2: 4-5), responds in faith to the divine provision of salvation. He passes immediately out of spiritual death into spiritual life, and from the old creation into the new; being justified, accepted before the Father according as Christ, His Son, is accepted, loved as Christ is loved, having his place and portion as linked to Him, and one with Him forever (John 5:24; 17:23; Acts 13:39; Romans 5:1; I Corinthians 3:21-23; Ephesians 1:3; Colossians 2:10; II Peter 3:18; I John 4:17; 5:11-12). We also believe that the greatest degree of reformation, the highest attainment of morality, the most attractive culture, baptism or another ordinance, cannot help the sinner to take even one step toward heaven. Only by a new nature imparted from above, a new life implanted by the Holy Spirit through the Word, may one obtain salvation and thus become a child of God (Leviticus 17:11; Isaiah 64:6; Matthew 26:28; John 3:5, 18; Romans 5:6-9; II Corinthians 5:21; Galatians 3:13; 6:15; Ephesians 1:7; Philippians 3:4-9; Titus 3:5; James 1:18; I Peter 1:18-19, 23).',
    },
    {
      title: '5. Holy Angels',
      content: 'We believe that angels are created beings and are therefore not to be worshiped. Although they are a higher order of creation than man, they are created to serve God and to worship Him (Luke 2:9-14; Hebrews 1:6-7, 14; 2:6-7; Revelation 5:11-14; 19:10; 22:9).',
    },
    {
      title: '6. Satan',
      content: 'We believe in the existence of Satan as a personal being and a fallen angelic creature of God, who is the open and declared enemy of God and man (Job 1:6-7; Isaiah 14:12-17; Matthew 4:2-11; II Corinthians 4:3-4; 11:3, 14-15).',
    },
    {
      title: '7. The Church',
      content: 'We believe that the church, which began on the day of Pentecost, the Body and Bride of Christ, is a spiritual organism made up of all born-again persons (I Corinthians 12:12-13; Ephesians 1:22-23; 5:25-27). We further believe that by the Holy Spirit all believers in this age are baptized into, and thus become, one body that is Christ\'s and having become members one of another, are under solemn duty to keep the unity of the Spirit in the bond of peace, rising above all sectarian differences, and loving one another with a pure heart fervently (Matthew 16:16-18; Acts 2:42-47; Romans 12:5; I Corinthians 12:12-27; Ephesians 1:20-23; 4:1-16; Colossians 3:14-15).',
    },
    {
      title: '8. Water Baptism',
      content: 'We believe that the Lord Jesus Christ instituted the ordinances of water baptism and the Lord\'s Table to be observed by all believers until His return. We believe baptism was instituted by the Lord Jesus Christ to symbolize the work of the Holy Spirit identifying the believer with Christ in His death, burial and resurrection. Baptism is commanded by the Lord Jesus Christ and was practiced by the New Testament Church. We practice the ordinance of baptism by immersion after conversion and believe that it is the solemn responsibility of every believer to bear this testimony of trust in Jesus Christ by being baptized (Matthew 28:19-20; Acts 2:38-44; 10:33, 43, 47, 48; Romans 6:3-7; Colossians 2:12).',
    },
    {
      title: '9. The Lord\'s Supper',
      content: 'We believe the Lord\'s Supper was instituted as a memorial remembrance, which instructs the body of believers by focusing the believer\'s worship upon Christ and His work on the cross. The Lord\'s Supper is the only act of worship where Jesus Christ gives us special directions and thus is the highlight of corporate worship. The Lord\'s Supper reminds us of the basis of our fellowship with Him, promotes an atmosphere of thankfulness in the church, and motivates our anticipation of His second coming through a common hope of future deliverance. We believe each believer is responsible not to partake of the bread (signifying His body broken for us) and the cup (signifying His blood shed for us) unworthily (Luke 22:7-38; I Corinthians 11:20-34). We are commanded to observe the Lord\'s Supper continually in order to focus on our Lord Jesus Christ (Matthew 26:26-30; Mark 14:22-26).',
    },
    {
      title: '10. The Baptism in the Holy Spirit',
      content: 'All believers are entitled to, should ardently expect and earnestly seek the promise of the Father, the baptism in the Holy Spirit, according to the command of our Lord Jesus Christ. This was the normal experience of all in the early church; it comes the endowment of power for life and service, the bestowment of the gifts and their uses in the work of the ministry (1 Cor 12:1-31); it is distinct from and subsequent to the experience of the new birth (Acts 10:44-46; 11:14-16), it comes with such experiences as an overflowing fullness of the Spirit (Acts 4:8), a deepened reverence for God (Acts 2:43), an intensified consecration to God and dedication to His work (Acts 2:42), and a more active love for Christ, His Word, and the lost (Mk 16:20). The baptism of believers in the Holy Spirit is witnessed by the initial physical sign of speaking with other tongues as the Spirit of God gives them utterance (Acts 2:4).',
    },
    {
      title: '11. Sanctification',
      content: 'We believe that sanctification is an act of separation from that which is evil, and of dedication unto God (Rom 12:1,2; 1 Thess 5:23; Heb 13:12). Sanctification is realized in the believer by recognizing his identification with Christ in His death and resurrection, and by faith reckoning daily upon the fact of that union, and by offering every faculty continually to the dominion of the Holy Spirit (Rom 6:1-11,13; 8:1,2,13; Gal 2:20; Philippians 2:12,13).',
    },
    {
      title: '12. Divine Healing',
      content: 'We believe that divine healing is an integral part of the gospel and is the privilege of all believers (Is 53:4,5; Mt 8:16,17; James 5:14, 1 Peter 2: 24).',
    },
    {
      title: '13. The Rapture of the Church',
      content: 'We believe that the personal, bodily return of our Lord Jesus Christ before the seven-year tribulation (1 Thessalonians 4:16; Titus 2:13). Christ will descend from heaven and at the sound of the trumpet the dead in Christ and all living believers will be caught up to meet the Lord in the air. It is the purpose of God, in the rapture, to save His own from the wrath destined for the world (I Corinthians 15:51-58; I Thessalonians 4:13-17; Revelation 3:10).',
    },
    {
      title: '14. The Second Coming of Christ',
      content: 'We believe that the period of great tribulation on the earth will be climaxed by the return of the Lord Jesus Christ to the earth as He went, in person on the clouds of heaven, and with power and great glory to introduce the millennial age, to bind Satan and place him in the abyss, to lift the curse which now rests upon the whole creation, to restore Israel to her own land and to give her the realization of God\'s covenant promises, and to bring the whole world to the knowledge of God (Deuteronomy 30:1-10; Isaiah 11:9; Ezekiel 37:21-28; Matthew 24:15-25, 46; Acts 15:16-17; Romans 8:19-23; 11:25-27; I Timothy 4:1-3; II Timothy 3:1-5; Revelation 20:1-3).',
    },
    {
      title: '15. The Final Judgment',
      content: 'We believe that there will be a final judgment in which the wicked dead will be raised and judged according to their works. (Matthew 25:46; Mark 9:43-48; Revelation 19:20; 20:11-15; 21:8).',
    },
    {
      title: '16. The Eternity',
      content: 'We believe that after the closing of the millennium, the temporary release of Satan, and the judgment of unbelievers (2Thessalonians 1:9; Revelation 20:7-15), the saved will enter the eternal state of glory with God, after which the elements of this earth are to be dissolved (2 Peter 3:10) and replaced with a new earth, wherein only righteousness dwells (Ephesians 5:5; Revelation 20:15; 21:1-27; 22:1-21). Following this, the heavenly city will come down out of heaven (Revelation 21:2) and will be the dwelling place of the saints, where they will enjoy forever fellowship with God and one another (John 17:3; Revelation 21-22). Our Lord Jesus Christ, having fulfilled His redemptive mission, will then deliver up the kingdom to God the Father (1 Corinthians15:24-28), that in all spheres the triune God may reign forever and ever (1 Corinthians 15:28).',
    },
  ];

  return (
    <section className="section-padding bg-neutral-50">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-6">
            Doctrinal Statement
          </h2>
          <p className="text-lg text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
            Our foundational beliefs rooted in Scripture that guide our faith and practice.
          </p>

          <div className="space-y-3">
            {doctrines.map((doctrine, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-soft overflow-hidden border border-neutral-200"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-neutral-50 transition-colors"
                >
                  <h3 className="text-lg font-heading font-semibold text-neutral-900 pr-4">
                    {doctrine.title}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-primary-600 flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-4 text-neutral-700 leading-relaxed">
                    {typeof doctrine.content === 'string' ? (
                      <p>{doctrine.content}</p>
                    ) : (
                      doctrine.content
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
