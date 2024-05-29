import avatar from '../images/avatar.png';
import './PageOne.css';
import bigAvatar from '../images/bigAvatar.png';
import todo from '../images/todo.png';
import arrow from '../images/arrow.png'
const PageOne = () => {
  return (
    <div className='body'>
      <header className='header'>
        <div className='head'>
          <div className='avatar-div'>
            <img src={avatar} alt='avatar' />
            <h1>Together Recruitment</h1>
          </div>

          <div className='links-div'>
            <a href='#'>Status</a>
            <a href='#'>Country</a>
            <a href='#'>добавить анкету</a>
            <button>выйти</button>
          </div>
        </div>
        <div className='buttons-div'>
          <button>профиль</button>
          <button>документы</button>
          <button>оплата</button>
        </div>
      </header>
      <section className='section-one'>
        <div>
          <img src={bigAvatar} alt='avatar' />
          <p style={{ fontSize: '24px' }}> ID: 121282178782</p>
          <p style={{ fontSize: '24px' }}>32.04.34</p>
        </div>

        <div className='data-div'>
          <div className='name-div'>
            <h1 style={{ color: '#0E60AE', fontSize: '32px' }}>Зулкаров Амантур Ащалал (23 года)</h1>
            <div className='avatar'>
              <img style={{ width: '24px', height: '24px' }} src={todo} alt='' />
            </div>
          </div>
          <div className='place'>
            <div className='form-div'>
              <h1>Место рождение: г. Ош</h1>
            </div>
            <div className='form-div'>
              <h1>Место проживания: г. Ош</h1>
            </div>
            <div className='form-div'>
              <h1>Дата рождения: 23.03.1990</h1>
            </div>
          </div>

        </div>
        <div className='height-div' >
               <p style={{ fontSize: '24px' }}>Рост 175см</p>
               <h1 style={{color:'orange', fontSize:'32px', marginTop:'200px'}}>ждет визу</h1>
        <p style={{ fontSize: '24px' }}>Вес 75кг</p>
        
   
        </div>
   
      </section>
      <section className='section-two'>
         <div className='input-div'>
        <div className='form'>
            <h1 style={{fontSize:'32px'}}>Загранпаспорт</h1>
            <h1>19291239</h1>
        </div>
        <div className='form'>
            <h1 style={{fontSize:'32px'}}>Дата выдачи загранпаспорта</h1>
            <h1>23.03.23</h1>
        </div>
        <div className='form'>
            <h1 style={{fontSize:'32px'}}>Орган выдачи загранпаспорта</h1>
            <h1>Госуслуги</h1>
        </div>
        <div className='form'>
            <h1 style={{fontSize:'32px'}}>Уровень английского</h1>
            <h1>B-2</h1>
            </div>
        <div className='form'>
            <h1 style={{fontSize:'32px'}}>Семейный статус</h1>
            <h1>Женат</h1>
            </div>
             <div className='form'>
        <h1>Дети</h1>

        <div>
           <h1>2</h1>
        <img src={arrow} alt="" />            
        </div>
         
       </div>
        <div className='mini-form'>
                <h1>Воашлв Ваво Дтв</h1>
                <h1>23.03.2009</h1>
            </div>
           <div className='mini-form'>
           <h1>Воашлв Ваво Дтв</h1>
           <h1>23.03.2009</h1>
           </div>
           <div className='form'>
            <h1>Родители</h1>
            <img src={arrow} alt="" />
           </div>
           <h1>Мать</h1>
           <div className='mini-form'>
            <h1>ФИО</h1>
           </div>
           <div className='mini-form'>
            <h1>
            номер
            </h1>
            
           </div>
           <div className='mini-form'>
            <h1>
             Дата рождения

            </h1>
           </div>
           <h1>Отец</h1>
           <div className='mini-form'>
            <h1>ФИО</h1>
           </div>
           <div className='mini-form'>
            <h1>Номер</h1>
           </div>
           <div className='mini-form'>
            <h1>
            Дата рождения
            </h1>
           </div>
           <div className='form'>
            <h1>Близкий друг</h1>
            <img src={arrow} alt="" />

           </div>
           <div className='mini-form'>
            <h1>
            ФИО
            </h1>
           </div>
           <div className='mini-form'>
            <h1>Номер</h1>
           </div>
           <div className='mini-form'>
            <h1>Дата рождения</h1>
           </div>
      </div>
      </section>
    </div>
  );
};

export default PageOne;
