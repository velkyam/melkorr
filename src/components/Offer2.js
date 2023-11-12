import React from 'react';
import os from '../components/assets/images/techmono.svg'
import protokol from '../components/assets/images/performancemono.svg'
import support from '../components/assets/images/supportmono.svg'
import scale from '../components/assets/images/scalemono.svg'
import reseni from '../components/assets/images/securemon.svg'
import spolehlivost from '../components/assets/images/testovanimono.svg'



function Offer2() {

    return (


        <div className="container2 ">
        <div className="sectionContainer2 offerBg">
        

            <div className="widthContainer column featureSection">
              

                <div className='howTitle offerTitle '>Co nabízíme našim klientům</div>
                

                <div className='featureGrid'>
                    <div className='column nabidkaCard'>


                        <img className='gridIcon' src={reseni} alt="reseni_icon" />
                        <h5 className='milestoneTitle'>
                            Vysokou spolehlivost s důrazem na bezpečnost
                        </h5>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi blandit cursus risus at. Tortor condimentum lacinia quis vel eros donec ac. </p>
                    </div>
                    <div className='column nabidkaCard'>
                        <img className='gridIcon' src={protokol} alt="nolicense_icon" />
                        <h5 className='milestoneTitle'>Nezávislost na dokupování licencí od třetích stran</h5>
                        <p>Convallis tellus id interdum velit laoreet id donec. Vel pharetra vel turpis nunc eget lorem dolor sed. In cursus turpis massa tincidunt dui ut ornare lectus. Venenatis urna cursus eget nunc. Massa tincidunt dui ut ornare.</p>
                    </div>
                    <div className='column nabidkaCard'>
                        <img className='gridIcon' src={scale} alt="scale_icon" />
                        <h5 className='milestoneTitle'>Vysoce škálovatelnou architekturu
                        </h5>
                        <p>Eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Etiam sit amet nisl purus in mollis nunc sed id. Nisl nunc mi ipsum faucibus vitae. Eu consequat ac felis donec. Nisi porta lorem mollis aliquam ut porttitor. Bibendum at varius vel pharetra.</p>
                    </div>
                </div>
                <div className='featureGrid'>
                    <div className='column nabidkaCard'>
                        <img className='gridIcon' src={spolehlivost} alt="test_icon" />
                        <h5 className='milestoneTitle'>
                            Řešení otestované v praxi</h5>
                        <p>Auctor neque vitae tempus quam pellentesque. Cras ornare arcu dui vivamus arcu. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Arcu bibendum at varius vel pharetra vel turpis.</p>
                    </div>
                    <div className='column nabidkaCard'>
                        <img className='gridIcon' src={os} alt="stavajici_technologie_icon" />
                        <h5 className='milestoneTitle'>Širokou podporu pro stávající technologie</h5>
                        <p>Ullamcorper a lacus vestibulum sed arcu non odio euismod. Id cursus metus aliquam eleifend mi. Ante metus dictum at tempor commodo ullamcorper a lacus. Lobortis mattis aliquam faucibus purus in massa. Consectetur adipiscing elit duis tristique.</p>
                    </div>
                    <div className='column nabidkaCard'>
                        <img className='gridIcon' src={support} alt="support_icon" />
                        <h5 className='milestoneTitle'>Uživatelskou podporu 24/7</h5>
                        <p>Quam viverra orci sagittis eu volutpat odio facilisis. Eget gravida cum sociis natoque penatibus et magnis dis parturient. Magnis dis parturient montes nascetur ridiculus mus mauris. Dignissim convallis aenean et tortor at risus viverra adipiscing at.</p>
                    </div>
                </div>
            </div>



        </div>
        </div>





    );
}


export default Offer2;