import './App.css'
import about from "./assets/images/about.png";
import img1 from "./assets/images/img1.jpg";
import test1 from "./assets/images/testi1.jpg"
import img2 from "./assets/images/img2.jpg"
import img2i from "./assets//images/testi1.jpg";
import img3 from "./assets/images/img3.jpg";
import img4 from "./assets/images/img4.jpg";
import img5 from "./assets/images/img5.jpg"
import img6 from "./assets/images/img6.jpg"
import img8 from "./assets/images/img8.jpg";
import img7 from "./assets/images/img7.jpg";
import img10 from "./assets/images/img10.jpg";
import testi1 from "./assets/images/testi1.jpg";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    Input ,
    ModalCloseButton, useDisclosure,
} from '@chakra-ui/react';

function App() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div className="App">
            <>


                <Modal colorScheme={"blackAlpha"} isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader color={"black"}>Sign In</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                        <Input m={3} placeholder='Email' />
                        <Input m={3} placeholder='Password' />
                        </ModalBody>

                        <ModalFooter color={"white"}>
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                Close
                            </Button>
                            <Button colorScheme='blue'>Login</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
            <html lang="en">


                <head>
                    <meta charSet="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Ace Sports</title>

                    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
                    <link rel="stylesheet" href="/public/style.css" />
                </head>

                <body>
                 
                        <div className="nav container">
                            <a href="#" className="logo">Ace <span>Sports</span></a>

                            <Button className="login" onClick={onOpen}>login</Button>

                        </div>
                    

                    <section className="home" id="home">
                        <div className="home-text container">
                            <h2 className="home-title">Ace Sports</h2>
                            <span className="home-subtitle">Your source of great content</span>
                        </div>
                    </section>

                    <section className="about container" id="about">
                        <div className="contentBx">
                            <h2 className="titleText">Catch up with the trending topics</h2>
                            <p className="title-text">
                                Do you enjoy watching games and discussing the latest scores and highlights? If so, you've come to the right place! At Ace Sports, we're dedicated to providing our readers with the latest news and insights from the world of sports. From football and basketball to rugby, and beyond, we cover it all.
                                <br />Our team of writers and contributors are experienced sports enthusiasts who are passionate about their craft. They work tirelessly to bring you the most accurate and up-to-date information, as well as in-depth analysis and commentary on the biggest games and stories of the day. Whether you're a casual fan or a die-hard supporter, we've got you covered.
                            </p>
                            <a href="#" className="btn2">Read more</a>
                        </div>
                        <div className="imgBx">
                            <img src={about} alt="" className="fitBg" />
                        </div>
                    </section>

                 

                    <div className="post container">
                        <div className="post-box Rugby">
                            <img src={img1} alt="" className="post-img" />
                            <h2 className="category">Rugby</h2>
                            <a href="#" className="post-title">AP Warriors overun The Cooperative University Farus</a>
                            <span className="post-date">16 Feb 2023</span>
                            <p className="post-description">Warriors forwards dominated the scrums and lineouts, consistently winning possession and allowing their backs to launch relentless attacks on The Cooperative University Farus's defense. The ball was moved quickly and efficiently through the hands of the Team B players, who displayed excellent ball-handling skills and a great sense of teamwork.</p>
                            <div className="profile">
                                <img src={test1} alt="" className="profile-img" />
                                <span className="profile-name">Mwas</span>
                            </div>
                        </div>

                        <div className="post-box Rugby">
                            <img src={img2} alt="" className="post-img" />
                            <h2 className="category">Rugby</h2>
                            <a href="#" className="post-title">Varsity champ gets the call</a>
                            <span className="post-date">20 Feb 2023</span>
                            <p className="post-description">Daniel Kiluu, a former varsity star of The Cooperative University, has earned a call up to the national team of Uganda 15s, marking a significant milestone in his rugby career. Kiluu's selection to the national team comes after his exceptional performance in the just-concluded Kenya Cup season, where he played for Homeboyz Rugby Club.
                                Kiluu, who plays as a flanker, is known for his impressive strength and speed on the pitch. He started playing rugby while in high school and went on to join The Cooperative University, where he honed his skills and became a star player. During his time at the university, Kiluu was part of the team that won the Kenya University Sports Association (KUSA) 15s rugby tournament in 2021 and 2022.
                                After graduating from The Cooperative University, Kiluu joined Homeboyz Rugby Club, one of the top rugby clubs in Kenya. He quickly established himself as a key player for the team, helping them to finish second in the Kenya Cup league in the 2022-2023 season. Kiluu's impressive performances did not go unnoticed, and he was soon called up to the Uganda national team.
                                Kiluu's call up to the national team is not only a testament to his hard work and dedication but also to the quality of rugby players being produced by The Cooperative University. The university has a rich history of producing top-notch rugby players who go on to play at the highest levels of the game. Kiluu's success is a source of pride for the university and serves as an inspiration to current and future students.
                                Kiluu's selection to the Uganda national team also marks a new chapter in his rugby career. He will have the opportunity to play against some of the best rugby teams in Africa and showcase his talent on a bigger stage. His inclusion in the national team will also provide him with exposure to top-level coaching and training, which will undoubtedly help him to develop his skills even further.
                                In conclusion, Daniel Kiluu's call up to the Uganda national team is a significant achievement and a testament to his hard work and dedication. It is also a reflection of the quality of rugby players being produced by The Cooperative University. Kiluu's success should serve as an inspiration to other aspiring rugby players and a source of pride for the university. We wish Kiluu all the best as he embarks on this new chapter in his rugby career.
                            </p>
                            <div className="profile">
                                <img src={img2i} alt="" className="profile-img" />
                                <span className="profile-name">Mwas</span>
                            </div>
                        </div>

                        <div className="post-box Football">
                            <img src={img3} alt="" className="post-img" />
                            <h2 className="category">Football</h2>
                            <a href="#" className="post-title">Footbal</a>
                            <span className="post-date">23 Feb 2023</span>
                            <p className="post-description">Champ</p>
                            <div className="profile">
                                <img src={testi1} alt="" className="profile-img" />
                                <span className="profile-name">Mwas</span>
                            </div>
                        </div>

                        <div className="post-box Rugby">
                            <img src={img4} alt="" className="post-img" />
                            <h2 className="category">Rugby</h2>
                            <a href="#" className="post-title">How to get a job while sleeping</a>
                            <span className="post-date">25 Feb 2023</span>
                            <p className="post-description">Jakpizzo</p>
                            <div className="profile">
                                <img src={testi1} alt="" className="profile-img" />
                                <span className="profile-name">Mwas</span>
                            </div>
                        </div>

                        <div className="post-box Rugby">
                            <img src={img5} alt="" className="post-img" />
                            <h2 className="category">Rugby</h2>
                            <a href="#" className="post-title">Winning from Behind</a>
                            <span className="post-date">1 Mar 2023</span>
                            <p className="post-description">Ngl they had us in the firsthalf</p>
                            <div className="profile">
                                <img src={testi1} alt="" className="profile-img" />
                                <span className="profile-name">Mwas</span>
                            </div>
                        </div>

                        <div className="post-box Basketball">
                            <img src={img6} alt="" className="post-img" />
                            <h2 className="category">Basketball</h2>
                            <a href="#" className="post-title">Hounds on rampage</a>
                            <span className="post-date">9 Mar 2023</span>
                            <p className="post-description">The Cooperative University Hounds basketball team has achieved a stunning victory over the Catholic University Monks in a highly anticipated varsity league game. The game was held on the evening of March 9th, 2023, at the Monastery. The atmosphere was electric as both teams fought hard to claim the victory.
                                The Hounds came into the game as underdogs, with the Monks being a highly ranked team in the league. However, the Hounds showed that they were not to be underestimated. From the outset, they were playing with intensity and determination, taking an early lead and keeping the pressure on the Monks throughout the game.
                                Led by their star player, senior center Otieno Braxton, the Hounds' offense was on fire, scoring 85 points to the Monks' 72. On the defensive end, the Hounds were equally impressive, making it difficult for the Monks to find openings and forcing them into making mistakes. They also showed great teamwork, communicating effectively and moving together as a unit to shut down the Monks' offense.
                                The game was not without its tense moments, with both teams fighting fiercely for every point. But in the end, it was the Hounds who emerged victorious, claiming a well-deserved win over a formidable opponent. The team celebrated with joy and excitement, proud of their accomplishment and grateful for the hard work and dedication that led them to this moment.
                                This victory is a testament to the strength of the Hounds as a team and the talent and skill of each individual player. It also highlights the value of determination and perseverance, as the Hounds refused to be intimidated by their opponents and instead rose to the occasion and gave it their all.
                                The Hounds' victory over the Monks will no doubt be remembered as a highlight of the varsity league season, and it will be interesting to see how they continue to perform in future games. With the confidence and momentum gained from this win, the Hounds may well be a team to watch as they continue their pursuit of success in the world of collegiate basketball.
                            </p>
                            <div className="profile">
                                <img src={testi1} alt="" className="profile-img" />
                                <span className="profile-name">Mwas</span>
                            </div>
                        </div>

                        <div className="post-box Rugby">
                            <img src={img7} alt="" className="post-img" />
                            <h2 className="category">Rugby</h2>
                            <a href="#" className="post-title">Kabras Win the Kenya Cup</a>
                            <span className="post-date">11 Mar 2023</span>
                            <p className="post-description">Rugby fans in Kakamega Town witnessed an exciting match between Kabras Rugby and Kenya Commercial Bank (KCB) in the Kenya Cup. It was a highly anticipated match, as both teams had shown impressive performances in previous matches. However, it was Kabras Rugby that emerged as the dominant force, thrashing KCB 46-15 in what was a stunning display of rugby.
                                The match started with both teams exchanging blows, as they tried to find their footing in the game. Kabras Rugby quickly took control of the game, scoring two quick tries through Jone Kubu and Felix Ayange. KCB tried to mount a comeback, but their efforts were quickly shut down by a determined Kabras Rugby side, who continued to pile on the pressure. Kabras Rugby's superior physicality and pace were evident, as they continued to break through the KCB defense with ease.
                                KCB managed to score a try through Michael Wanjala, but it was quickly nullified by Kabras Rugby, who responded with two more tries through Dan Sikuta and Ntabeni Dukisa. The first half ended with Kabras Rugby leading 29-10, and it was clear that KCB had a mountain to climb if they were to stage a comeback.
                                The second half saw Kabras Rugby continue their dominance, as they added three more tries through Ayange, George Nyambua, and Kevin Keegan. KCB managed to score a consolation try through Tony Onyango, but it was too little too late, as Kabras Rugby had already secured a comfortable lead.
                                The match ended with Kabras Rugby emerging as the clear winners, thrashing KCB 46-15. It was a remarkable performance from Kabras Rugby, who showed great determination and skill throughout the match. They outplayed KCB in every aspect of the game, dominating the scrums, lineouts, and breakdowns.
                                The win was also significant for Kabras Rugby, as it helped them solidify their position at the top of the Kenya Cup standings. They have been in impressive form this season, and this win further cements their status as one of the best rugby teams in Kenya.
                                Overall, the Kabras Rugby versus KCB match was a thrilling encounter that showcased the very best of Kenyan rugby. It was a testament to the skill and dedication of both teams, and a reminder of the incredible talent that exists in the Kenyan rugby scene. Kabras Rugby emerged as the deserved winners, and their fans will undoubtedly be celebrating this impressive victory for a long time to come.
                            </p>
                            <div className="profile">
                                <img src={testi1} alt="" className="profile-img" />
                                <span className="profile-name">Mwas</span>
                            </div>
                        </div>

                        <div className="post-box Basketball">
                            <img src={img8} alt="" className="post-img" />
                            <h2 className="category">Basketball</h2>
                            <a href="#" className="post-title">Giants on winning ways</a>
                            <span className="post-date">16 Mar 2023</span>
                            <p className="post-description">Strathmore University Giants basketball team extended their winning streak in the Kenya Universities Sports Association (KUSA) games. The team's victory against the University of Nairobi demonstrated their skill and determination, and showcased why they are one of the top basketball teams in Kenya.
                                The Strathmore University Giants basketball team has been on a roll, winning game after game this season. They have shown great teamwork, skill, and perseverance, leading them to the top of the KUSA standings. Their success can be attributed to several factors, including their exceptional coaching, talented players, and rigorous training.
                                The Giants are led by Coach James Omondi, a seasoned coach with a wealth of experience in coaching basketball teams. He has built a strong team culture that emphasizes hard work, discipline, and a relentless pursuit of excellence. Under his leadership, the Giants have become a force to be reckoned with in the KUSA basketball league.
                                The team's success is also due to the talent and dedication of its players. The Giants have a roster of talented basketball players who have worked hard to hone their skills and improve their game. They are a well-balanced team, with players who excel in different aspects of the game, including shooting, rebounding, and defense. The team's chemistry is also evident on the court, as they play with great cohesion and teamwork.
                                Moreover, the Giants have invested heavily in training and preparation, which has contributed to their success. They have a state-of-the-art training facility that provides the players with the necessary resources to train and develop their skills. The team practices regularly, and their training sessions are rigorous and focused. The players also work closely with the coaching staff to analyze their performance and identify areas for improvement.
                                The Strathmore University Giants' winning streak is a testament to their hard work, dedication, and talent. They have proven themselves to be a top basketball team in Kenya and have set the bar high for other teams in the KUSA league. With the right mindset and continued commitment, the Giants are poised to continue their success and make a mark in the Kenyan basketball scene.
                                In conclusion, the Strathmore University Giants' victory on the 16th of March 2023 is a clear indication of their skill and determination. The team's success is a result of the excellent coaching, talented players, and rigorous training they have invested in. With their continued hard work and dedication, the Giants are well on their way to becoming one of the top basketball teams in Africa.
                            </p>
                            <div className="profile">
                                <img src={testi1} alt="" className="profile-img" />
                                <span className="profile-name">Mwas</span>
                            </div>
                        </div>

                        <div className="post-box Football">
                            <img src={img10} alt="" className="post-img" />
                            <h2 className="category">Football</h2>
                            <a href="#" className="post-title">UEFA Draw is Out!</a>
                            <span className="post-date">17 Mar 2023</span>
                            <p className="post-description">The UEFA Champions League Quarterfinal draw has been announced, and it promises to be a thrilling stage of the tournament. The draw features some mouth-watering ties, including Milan vs Napoli, Benfica vs Inter, Real Madrid vs Chelsea, and Manchester City vs Bayern Munich.
                                The match between Milan and Napoli promises to be a classic Italian showdown. Milan, one of Italy's most successful teams, will take on Napoli, who have been in fine form this season. Both teams have a rich history in European football, and their encounter is sure to be one of the most highly anticipated fixtures of the quarterfinals.
                                Benfica vs Inter Milan is another fascinating matchup. Both teams have a rich history in European football and are always competitive in their domestic leagues. This match will be a test of their resolve as they try to book their place in the semifinals of the competition.
                                Real Madrid vs Chelsea is a heavyweight clash between two of Europe's most decorated clubs. Real Madrid has won the competition 14 times, while Chelsea has won it once. The match will see former Real Madrid manager Carlo Ancelotti take on his former club. Chelsea, on the other hand, will be looking to build on their impressive form under new manager Graham Potter.
                                Finally, Manchester City vs Bayern Munich is a battle between two of the strongest teams in Europe. Manchester City is yet to win the Champions League, while Bayern Munich has won the competition six times. This match will be a test of both teams' attacking prowess and defensive resilience.
                                In conclusion, the quarterfinal draw for the UEFA Champions League promises to be an exciting stage of the competition. Fans can look forward to watching some of Europe's best teams go head-to-head in their quest for glory. The matches are scheduled to take place in April, and football enthusiasts around the world will be eagerly anticipating these fixtures.
                            </p>
                            <div className="profile">
                                <img src={testi1} alt="" className="profile-img" />
                                <span className="profile-name">Mwas</span>
                            </div>
                        </div>
                    </div>

                    <footer className='page'>
                        <div className="footer-container">
                            <div className="sec aboutus">
                                <h2>About Us</h2>
                                <p>Welcome to Ace Sports where I'll be covering the latest news, scores, and updates from the world of sports. Stay tuned for daily posts and analysis.</p>
                                <ul className="sci">
                                    <li><a href="#"><i className="bx bxl-facebook"></i></a></li>
                                    <li><a href="#"><i className="bx bxl-instagram"></i></a></li>
                                    <li><a href="#"><i className="bx bxl-twitter"></i></a></li>
                                    <li><a href="#"><i className="bx bxl-linkedin"></i></a></li>
                                </ul>
                            </div>
                            <div className="sec quicklinks">
                                <h2>Quick Links</h2>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                </ul>
                            </div>
                            <div className="sec contactBx">
                                <h2>Contact Info</h2>
                                <ul className="info">
                                    <li>
                                        <span><i className='bx bxs-map'></i></span>
                                        <span>Ushirika rd <br /> Karen <br /> NBO</span>
                                    </li>
                                    <li>
                                        <span><i className='bx bx-envelope'></i></span>
                                        <p><a href="mailto:Acesports@gmail.com">Acesports@gmail.com</a></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </footer>

                    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"
                        integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA=="
                        crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
                    <script src="../public/main.js"></script>
                </body>

            </html>
        </div>
    )
}

export default App
