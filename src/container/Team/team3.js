import React, { Component } from 'react';
import bgteam from '../../assets/images/bg1.png';
import bgteam2 from '../../assets/images/bg2.png';
import bgteam3 from '../../assets/images/bg3.png';
import TeamItem from './TeamItem'
import ReactFullpage from '@fullpage/react-fullpage';
import { TimelineMax } from 'gsap';

class Team extends Component {
    constructor(props) {
        super(props);
    }
    handleMove = (origin, destination, direction) => {
        const sectionDestination = destination.item;
        const cardLeft = sectionDestination.querySelector('.team-card-left');
        const tl = new TimelineMax({ delay: 0.2 });
        tl.fromTo(cardLeft, 1.5, {
            x: -400,
            opacity: 0
        }, {
            x: 0,
            opacity: 1
        })
        const cardRight = sectionDestination.querySelector('.team-card-right');
        const tl2 = new TimelineMax({ delay: 0.2 });
        tl2.fromTo(cardRight, 1.5, {
            x: 400,
            opacity: 0
        }, {
            x: 0,
            opacity: 1
        })
        const bgrRight = sectionDestination.querySelector('.team-item-bgr-right');
        const tl3 = new TimelineMax({ delay: 0.2 });
        tl3.fromTo(bgrRight, 1.5, {
            x: 400,
            opacity: 0
        }, {
            x: 0,
            opacity: 1
        })
        const bgrLeft = sectionDestination.querySelector('.team-item-bgr-left');
        const tl4 = new TimelineMax({ delay: 0.2 });
        tl4.fromTo(bgrLeft, 1.5, {
            x: -400,
            opacity: 0
        }, {
            x: 0,
            opacity: 1
        })
        const contactTitle = sectionDestination.querySelector('.header-title');
        const tl5 = new TimelineMax({ delay: 0.2 });
        tl5.fromTo(contactTitle, 1.5, {
            x: -400,
            opacity: 0
        }, {
            x: 0,
            opacity: 1
        })
    }
    render() {
        return (
            <ReactFullpage
                licenseKey={'YOUR_KEY_HERE'}
                scrollingSpeed={1000}
                scrollHorizontally={true}
                scrollHorizontallyKey={'YOUR KEY HERE'}
                onLeave={this.handleMove}

                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <div className='section'>
                                <section className="container-fluid p-0" >
                                    <div className="team-header" style={{ backgroundImage: `url(${bgteam})` }}>
                                        <div className=' bg-cover-dark'>
                                            <div className='header-title'>
                                                <p className='mb-0'><strong>Wellcome to page team</strong></p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className='section'>
                                <TeamItem background={bgteam2}
                                    title="architectural"
                                    header="Studio Gang"
                                    text="Founded bv MacAIThur Fellow and Halyard Professor in Practice Jeanne Gang,
                                    Studio Gang is an architecture and urban design practice committed to creating
                                    innovative buildings—like Chicago's award-winning Aqua Tower—that enhance public space.
                                    Among the firm's current projects are residential towers in Los Angeles, San Francisco,
                                    Chicago, Toronto, and Amsterdam, the new United States Embassv in Brazil,
                                    and an expansion of the American Museum ofNatun1 Hist01Y in New York City.
                                    The studio's work has been widelv honored and exhibited, including at the Venice
                                Architecture Biennale, the Art Institute of Chicago, and the Museum of Modem Art"
                                    textRight={false} />
                            </div>
                            <div className='section'>
                                <TeamItem background={bgteam3}
                                    title="Interior design"
                                    header="Michaelis Boyd"
                                    text="London-based Michaelis Boyd is an award-winning firm with a reputation for 
                                    sophisticated architecture and interiors emphasizing sustainable materials and building techniques. 
                                    The firm's global polffolio encompasses high-end residential and commercial projects, 
                                    including luxurv hotels, private members' clubs, and chic restaurants and bars.
                                     Among Michaelis Boyd's well-known works are Sandibe, a sustainable safari lodge in Botswana. 
                                     Soho House outposts in Berlin, Los Angeles, and the English countryside, London's famed Groucho Club,
                                      the Williamsburg Hotel in Brooklyn, and residences at the Sugar Beach resort in St Lucia."
                                    textRight={true} />
                            </div>

                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        );
    }
}
export default Team;
