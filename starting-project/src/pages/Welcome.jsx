import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

import cityImg from '../assets/city.jpg';
import heroImg from '../assets/hero.png';

export default function WelcomePage() {
  const { scrollY } = useScroll();//O useScroll é um hook que retorna o scrollY, que é a posição do scroll da página em pixels

  const yCity = useTransform(scrollY, [0, 200], [0, -100]);//O useTransform é um hook que transforma um valor de entrada em um valor de saída, nesse caso, ele transforma a posição do scroll em pixels
  const opacityCity = useTransform(scrollY, [0, 200, 300, 700], [1, 0.5, 0.5, 0]);//O useTransform é um hook que transforma um valor de entrada em um valor de saída, nesse caso, ele transforma a posição do scroll em opacidade
  const yHero = useTransform(scrollY, [0, 200], [0, -200]);//O useTransform é um hook que transforma um valor de entrada em um valor de saída, nesse caso, ele transforma a posição do scroll em pixels, a posição do scroll é multiplicada por -1 para que a imagem se mova para cima
  const opacityHero = useTransform(scrollY, [0, 200, 300, 700], [1, 0.5, 0.5, 0]);//O useTransform é um hook que transforma um valor de entrada em um valor de saída, nesse caso, ele transforma a posição do scroll em opacidade
  const yText = useTransform(scrollY, [0, 200, 300, 500], [0, 50, 50, 300]);//O useTransform é um hook que transforma um valor de entrada em um valor de saída, nesse caso, ele transforma a posição do scroll em pixels
  const scaleText = useTransform(scrollY, [0, 300], [1, 1.5]);//O useTransform é um hook que transforma um valor de entrada em um valor de saída, nesse caso, ele transforma a posição do scroll em escala

  return (
    <>
      <header id="welcome-header">
        <motion.div id="welcome-header-content" style={{scale: scaleText, y: yText}}>
          <h1>Ready for a challenge?</h1>
          <Link id="cta-link" to="/challenges">
            Get Started
          </Link>
        </motion.div>
        <motion.img
          style={{ opacity: opacityCity, y: yCity }}//The difference between style and animate is that style is used for CSS properties that don't have a defined animation, while animate is used for properties that have a defined animation
          src={cityImg}
          alt="A city skyline touched by sunlight"
          id="city-image"
        />
        <motion.img
          style={{ opacity: opacityHero, y: yHero }}//The difference between style and animate is that style is used for CSS properties that don't have a defined animation, while animate is used for properties that have a defined animation
          src={heroImg}
          alt="A superhero wearing a cape"
          id="hero-image"
        />
      </header>
      <main id="welcome-content">
        <section>
          <h2>There&apos;s never been a better time.</h2>
          <p>
            With our platform, you can set, track, and conquer challenges at
            your own pace. Whether it&apos;s personal growth, professional
            achievements, or just for fun, we&apos;ve got you covered.
          </p>
        </section>

        <section>
          <h2>Why Challenge Yourself?</h2>
          <p>
            Challenges provide a framework for growth. They push boundaries,
            test limits, and result in genuine progress. Here, we believe
            everyone has untapped potential, waiting to be unlocked.
          </p>
        </section>

        <section>
          <h2>Features</h2>
          <ul>
            <li>Custom challenge creation: Set the rules, define your pace.</li>
            <li>
              Track your progress: See your growth over time with our analytics
              tools.
            </li>
            <li>
              Community Support: Join our community and get motivated by peers.
            </li>
          </ul>
        </section>

        <section>
          <h2>Join Thousands Embracing The Challenge</h2>
          <p>
            “I never realized what I was capable of until I set my first
            challenge here. It&apos;s been a transformative experience!” - Alex
            P.
          </p>
          {/* You can add more testimonials or even a carousel for multiple testimonials */}
        </section>
      </main>
    </>
  );
}
