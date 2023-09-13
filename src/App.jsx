import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './style.css'
function App() {
  return (
    <main className='row g-0'>
        <nav className='col-3'>
          <ul className='list-unstyled'>
            <li className='py-lg-3 px-lg-4' role="button">داشبورد</li>
            <li className='py-lg-3 px-lg-4' role="button">پروفایل کاربر</li>
            <li className='py-lg-3 px-lg-4' role="button">جدول</li>
            <li className='py-lg-3 px-lg-4' role="button">تایپوگذافی</li>
            <li className='py-lg-3 px-lg-4' role="button">آیکن ها</li>
          </ul>
        </nav>
        <section className='col-9'>
          <div className="row pb-5">
            <div className="col-3">
              <span>داشبورد</span>
            </div>
            <div className="col-9">
              <input type="text" />
              <span class="material-symbols-outlined">grade</span>
              <span class="material-symbols-outlined">grade</span>
              <span class="material-symbols-outlined">grade</span>
            </div>
          </div>
          <div className="row pb-5">
            <div className="col-3">
              <div className="box1 position-relative bg-white text-black px-3 rounded-2">
                <div className='row d-flex'>
                  <div className="col-9 tx1">
                    <span>فضای مصرف شده</span> <br />
                    <span>49 / 50 GB</span>
                  </div>
                  <div className="col-3 ic1 d-flex justify-content-center align-items-center py-3 bg-warning position-absolute rounded-1">
                    <span className="material-symbols-outlined ">content_copy</span>
                  </div>
                </div>
                <div>
                  فضای بیشتری داشته باشید
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="box1 position-relative bg-white text-black px-3 rounded-2">
                <div className='row d-flex'>
                  <div className="col-9 tx1">
                    <span>فضای مصرف شده</span> <br />
                    <span>49 / 50 GB</span>
                  </div>
                  <div className="col-3 ic1 d-flex justify-content-center align-items-center py-3 bg-warning position-absolute rounded-1">
                    <span className="material-symbols-outlined ">content_copy</span>
                  </div>
                </div>
                <div>
                  فضای بیشتری داشته باشید
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="box1 position-relative bg-white text-black px-3 rounded-2">
                <div className='row d-flex'>
                  <div className="col-9 tx1">
                    <span>فضای مصرف شده</span> <br />
                    <span>49 / 50 GB</span>
                  </div>
                  <div className="col-3 ic1 d-flex justify-content-center align-items-center py-3 bg-warning position-absolute rounded-1">
                    <span className="material-symbols-outlined ">content_copy</span>
                  </div>
                </div>
                <div>
                  فضای بیشتری داشته باشید
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="box1 position-relative bg-white text-black px-3 rounded-2">
                <div className='row d-flex'>
                  <div className="col-9 tx1">
                    <span>فضای مصرف شده</span> <br />
                    <span>49 / 50 GB</span>
                  </div>
                  <div className="col-3 ic1 d-flex justify-content-center align-items-center py-3 bg-warning position-absolute rounded-1">
                    <span className="material-symbols-outlined ">content_copy</span>
                  </div>
                </div>
                <div>
                  فضای بیشتری داشته باشید
                </div>
              </div>
            </div>
          </div>
          <div className="row pb-5">
            <div className="col-4">
              <div className="box2 p-3 bg-white text-black rounded-2">
                <div>
                  <img src="https://www.amcharts.com/wp-content/uploads/2013/12/demo_7394_none-7-1024x690.png" className='w-100' alt="" />
                </div>
                <div>فروش روزانه</div>
                <div>3 دقیقه پیش</div>
              </div>
            </div>
            <div className="col-4">
              <div className="box2 p-3 bg-white text-black rounded-2">
                <div>
                  <img src="https://www.amcharts.com/wp-content/uploads/2013/12/demo_7394_none-7-1024x690.png" className='w-100' alt="" />
                </div>
                <div>فروش روزانه</div>
                <div>3 دقیقه پیش</div>
              </div>
            </div>
            <div className="col-4">
              <div className="box2 p-3 bg-white text-black rounded-2">
                <div>
                  <img src="https://www.amcharts.com/wp-content/uploads/2013/12/demo_7394_none-7-1024x690.png" className='w-100' alt="" />
                </div>
                <div>فروش روزانه</div>
                <div>3 دقیقه پیش</div>
              </div>
            </div>
          </div>
          <div className="row py-2">
            <div className="col-6">
              <div className="box3 pt-4 px-3 pb-2 position-relative bg-white text-black rounded-2">
                <div className='row bg-purple rounded-1 py-2 position-absolute'>
                  <div className="col-3">
                    <span>وظایف</span>
                  </div>
                  <div className="col-3">
                    <span>بلاگ ها</span>
                  </div>
                  <div className="col-3">
                    <span>وبسایت</span>
                  </div>
                  <div className="col-3">
                    <span>سرور</span>
                  </div>
                </div>
                <div>
                  <ul className='list-unstyled'>
                    <li>طراح گرافیک از این متن بعنوان عنصری از ترکیب بندی برای پر کردن</li>
                    <li>طراح گرافیک از این متن بعنوان عنصری از ترکیب بندی برای پر کردن</li>
                    <li>طراح گرافیک از این متن بعنوان عنصری از ترکیب بندی برای پر کردن</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="box3 pt-4 px-3 pb-2 position-relative bg-white text-black rounded-2">
                <div className='row bg-purple rounded-1 py-2 position-absolute'>
                  <div className="col-3">
                    <span>وظایف</span>
                  </div>
                  <div className="col-3">
                    <span>بلاگ ها</span>
                  </div>
                  <div className="col-3">
                    <span>وبسایت</span>
                  </div>
                  <div className="col-3">
                    <span>سرور</span>
                  </div>
                </div>
                <div>
                  <ul className='list-unstyled'>
                    <li>طراح گرافیک از این متن بعنوان عنصری از ترکیب بندی برای پر کردن</li>
                    <li>طراح گرافیک از این متن بعنوان عنصری از ترکیب بندی برای پر کردن</li>
                    <li>طراح گرافیک از این متن بعنوان عنصری از ترکیب بندی برای پر کردن</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
    </main>
  )
}



export default App