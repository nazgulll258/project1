import avatar from '../images/avatar.png';
 import './PageTwo.css';
import bigAvatar from '../images/bigAvatar.png';
import todo from '../images/todo.png';
import lupa from '../images/lupa.png'
import trash from '../images/trash.png'
const PageTwo = () => {
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
        <div className='container'>
          <div className='button-div'>
            <button>Документ </button>
            <button>+New</button>
        </div>  
        <hr/>
        <div className='forms-div'>
            <div className='visas-div'>
                <div style={{display:'flex', justifyContent:'space-between'}}>

                
                <h1>Visa</h1>
                <div style={{display:'flex', gap:'20px'}}>
                         <img src={lupa} alt="" />
                <img src={todo} alt="" />
                <img src={trash} alt="" />
                </div>
                </div>
                <h1 style={{marginLeft:'200px', marginTop:'50px'}}>
                Lorem ipsum dolor sit amet consectetur. Lorem aliquam duis sit 
                <br /> purus aliquam scelerisque accumsan senectus suspendisse.
                </h1>
            </div>
            <div className='visas-div'>
                <div style={{display:'flex' ,justifyContent:'space-between'}}>

               
                <h1 >Visa</h1>
                <div style={{display:'flex', gap:'20px'}}>
                     <img src={lupa} alt="" />
                <img src={todo} alt="" />
                <img src={trash} alt="" />
                 </div>
                </div>
                <h1 style={{marginLeft:'200px', marginTop:'50px'}}>
                Lorem ipsum dolor sit amet consectetur. Lorem aliquam duis sit 
                <br /> purus aliquam scelerisque accumsan senectus suspendisse.
                </h1>
            </div>
        </div>
        </div>
        
      </section>
    </div>
  )
}

export default PageTwo
