import { useState } from 'react';
import Footer from '../PageComponents/Footer/Footer';
import Header from '../PageComponents/Header/Header';
import Radio from '../InputType/Radio/Radio';
import AutoComplete from '../InputType/Addresse/Addresse';
import DateRangePickerComp from '../InputType/DatePiker/DateRangePicker';

import dog from '../../assets/icons8-dog-100.png';
import cat from '../../assets/icons8-cat-100.png';
import small from '../../assets/icons8-dog-20.png';
import medium from '../../assets/icons8-dog-35.png';
import big from '../../assets/icons8-dog-55.png';
import geant from '../../assets/icons8-dog-64.png';

import './index.scss';
import Button from '../InputType/Button/Button';
import { addData } from '../../store/reducers/home';
import { searchThunk } from '../../store/reducers/search';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useNavigate } from 'react-router-dom';
import RadioSimple from '../InputType/RadioSimple/RadioSimple';

function Home() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const error = useAppSelector((state) => state.search.error);
  const message = useAppSelector((state) => state.search.message);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const [picked, setPicked] = useState('');
  function handleRadioChange(value: string): void {
    setPicked(value);
  }

  const [pickedAnimal, setAnimal] = useState('');
  function handleAnimalChange(value: string): void {
    setAnimal(value);
  }

  // picking the radius
  const [pickedRadius, setRadius] = useState('');
  function handleRadiusChange(value: string): void {
    setRadius(value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append('longitude', coordinates.x.toString());
    formData.append('latitude', coordinates.y.toString());
    const objData = Object.fromEntries(formData);
    dispatch(searchThunk(formData));
    // console.log(objData);
    dispatch(addData(objData));
    navigate('/search', { replace: true });
  }

  return (
    <div className="page-wrapper home">
      <Header />
      <main className="home__main">
        <section className="hero">
          <div className="hero__overlay" />
          <div className="hero__inner">
            <div className="hero__content">
              <span className="hero__eyebrow">O&apos;Dog Next Door</span>
              <h1 className="hero__title">
                Trouvez le gardien idéal pour votre compagnon
              </h1>
              <p className="hero__subtitle">
                Des pet-sitters de confiance, près de chez vous. Réservez en
                quelques clics et partez l&apos;esprit tranquille.
              </p>
              <ul className="hero__highlights">
                <li>Gardiens vérifiés</li>
                <li>Réservation en 2 min</li>
                <li>Compagnon assuré</li>
              </ul>
            </div>

            <form className="search-card" onSubmit={handleSubmit}>
              <h2 className="search-card__title">Réserver une garde</h2>

              <div className="search-card__field">
                <span className="search-card__label">
                  Je recherche pour mon
                </span>
                <div className="search-card__segment">
                  <Radio
                    name="animal"
                    id="cat"
                    value="Cat"
                    picked={pickedAnimal}
                    img={cat}
                    label="Chat"
                    onRadioChange={handleAnimalChange}
                  />
                  <Radio
                    name="animal"
                    id="dog"
                    value="Dog"
                    picked={pickedAnimal}
                    img={dog}
                    label="Chien"
                    onRadioChange={handleAnimalChange}
                  />
                </div>
              </div>

              <div className="search-card__field">
                <AutoComplete
                  style={{ borderColor: 'initial' }}
                  setCoordinates={setCoordinates}
                />
              </div>

              <div className="search-card__field">
                <span className="search-card__label">
                  Distance autour de chez moi
                </span>
                <div className="radiosimple-wrapper search-card__pills">
                  <RadioSimple
                    name="radius"
                    id="5km"
                    picked={pickedRadius}
                    value="5"
                    onRadioChange={handleRadiusChange}
                  />
                  <RadioSimple
                    name="radius"
                    id="10km"
                    picked={pickedRadius}
                    value="10"
                    onRadioChange={handleRadiusChange}
                  />
                  <RadioSimple
                    name="radius"
                    id="20"
                    picked={pickedRadius}
                    value="20"
                    onRadioChange={handleRadiusChange}
                  />
                  <RadioSimple
                    name="radius"
                    id="35"
                    picked={pickedRadius}
                    value="35"
                    onRadioChange={handleRadiusChange}
                  />
                </div>
              </div>

              <div className="search-card__field">
                <DateRangePickerComp legend="Pour ces jours" />
              </div>

              <div className="search-card__field">
                <span className="search-card__label">
                  La taille de mon animal
                </span>
                <div className="radio search-card__sizes">
                  <Radio
                    name="size"
                    id="small"
                    value="Petit"
                    picked={picked}
                    img={small}
                    label="0-7 kg"
                    onRadioChange={handleRadioChange}
                  />
                  <Radio
                    name="size"
                    id="medium"
                    value="Moyen"
                    picked={picked}
                    img={medium}
                    label="7-18 kg"
                    onRadioChange={handleRadioChange}
                  />
                  <Radio
                    name="size"
                    id="large"
                    value="Grand"
                    picked={picked}
                    img={big}
                    label="18-45 kg"
                    onRadioChange={handleRadioChange}
                  />
                  <Radio
                    name="size"
                    id="geant"
                    value="Geant"
                    picked={picked}
                    img={geant}
                    label="45+ kg"
                    onRadioChange={handleRadioChange}
                  />
                </div>
              </div>

              <Button prop="Rechercher" />
            </form>
          </div>
        </section>

        <section className="features">
          <article className="feature">
            <div className="feature__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 12l2 2 4-4"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="feature__title">Gardiens vérifiés</h3>
            <p className="feature__text">
              Chaque pet-sitter est contrôlé et évalué par la communauté.
            </p>
          </article>

          <article className="feature">
            <div className="feature__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="9" strokeWidth="1.8" />
                <path
                  d="M12 7v5l3 2"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="feature__title">Réservation simple</h3>
            <p className="feature__text">
              Indiquez vos dates et votre quartier, on s&apos;occupe du reste.
            </p>
          </article>

          <article className="feature">
            <div className="feature__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  d="M12 21s-7-4.35-7-10a4 4 0 017-2.65A4 4 0 0119 11c0 5.65-7 10-7 10z"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="feature__title">Compagnon assuré</h3>
            <p className="feature__text">
              Vos animaux sont entre de bonnes mains, à chaque réservation.
            </p>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
