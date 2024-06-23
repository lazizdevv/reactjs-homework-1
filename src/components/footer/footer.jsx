// ------------ footer images ----------
import facebookIcon from "/svg/facebook.svg";
import youtubeIcon from "/svg/youtube.svg";
import tikTokIcon from "/svg/tik-tok.svg";
import telegramIcon from "/svg/telegram.svg";
import instagramIcon from "/svg/instagram.svg";
import payMeIcon from "/svg/pay-me.svg";
import huMoIcon from "/svg/humocard.svg";
import uzCardIcon from "/svg/uz-card.svg";
import playMarketIcon from "/svg/google-play.svg";
import appStoreIcon from "/svg/app-store.svg";

const Footer = () => {
    return(
        <>    
            <footer id="footer">
                <div className="container">
                    <div className="link-box">
                        <ul id="box">
                            <h1 id="type">Платформа хақида</h1>
                            <li className="list"><a href="#" className="link">Liber ўзи нима?</a></li>
                            <li className="list"><a href="#" className="link">Фойдаланиш шартлари</a></li>
                            <li className="list"><a href="#" className="link">Ёрдам</a></li>
                        </ul>

                        <ul id="box">
                            <h1 id="type">Обуна хақида</h1>
                            <li className="list"><a href="#" className="link">Обуна бўлиш</a></li>
                            <li className="list"><a href="#" className="link">Қандай тўлаш</a></li>
                        </ul>

                        <ul id="box">
                            <h1 id="type">Китоблар</h1>
                            <li className="list"><a href="#" className="link">Аудио китоблар</a></li>
                            <li className="list"><a href="#" className="link">Электрон китоблар</a></li>
                            <li className="list"><a href="#" className="link">Китоблар</a></li>
                        </ul>

                        <ul id="box">
                            <h1 id="type">Мобил илова</h1>
                            <li className="list"><a href="#" className="link black"><img src={playMarketIcon} alt="play-market-icon" /></a></li>
                            <li className="list"><a href="#" className="link black"><img src={appStoreIcon} alt="app-store-icon" /></a></li>
                        </ul>
                    </div>
                </div>
            </footer>
                
            <footer id="footer-bottom">
                <div className="container">
                    <div className="bottom-box">
                        <div id="social-box">
                            <h1 id="contact-type">Ижтимоий тармоқлар</h1>
                            <ul id="icon-wrapper">
                                <li id="icon-list"><a href="#" id="icon-link"><img src={facebookIcon} alt="icon-facebook" id="icon" /></a></li>
                                <li id="icon-list"><a href="#" id="icon-link"><img src={youtubeIcon} alt="icon-youtube" id="icon" /></a></li>
                                <li id="icon-list"><a href="#" id="icon-link"><img src={tikTokIcon} alt="icon-tik-tok" id="icon" /></a></li>
                                <li id="icon-list"><a href="#" id="icon-link"><img src={telegramIcon} alt="icon-telegram" id="icon" /></a></li>
                                <li id="icon-list"><a href="#" id="icon-link"><img src={instagramIcon} alt="icon-instagram" id="icon" /></a></li>
                            </ul>
                        </div>

                        <div id="contact-box">
                            <h1 id="contact-type">Боғланиш</h1>
                            <ul id="contact">
                                <li><a href="tel:+998902537753">+998 90 253 77 53</a></li>
                                <li><a href="#">support@liber.uz</a></li>
                            </ul>
                        </div>

                        <div id="contact-box">
                            <h1 id="contact-type">Биз қабул қиламиз</h1>
                            <ul id="pay-icon-box">
                                <li id="pay-icon"><img src={payMeIcon} alt="pay-me-icon" /></li>
                                <li id="pay-icon"><img src={huMoIcon} alt="hu-mo-icon" /></li>
                                <li id="pay-icon"><img src={uzCardIcon} alt="uz-card-icon" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;