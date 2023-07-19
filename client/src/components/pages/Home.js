import React from "react";
import "./cssFiles/homepage.css";
function Home() {


	return (
<body id="page-top">
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
<div className="h-10 d-flex align-items-center justify-content-center">
<div class="shadow p-3 mb-5 bg-body rounded">   
  <div class="card text-white bg-dark" style={{maxWidth: "30"}} >
        <header class="masthead bg-dark text-white text-center">
            <div class="container d-flex align-items-center flex-column">
                <h1 class="masthead-heading text-uppercase mb-0">Please Register Based Upon Your Role</h1>
                <br />

                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <p class="masthead-subheading font-weight-light mb-0">Admin  - Staff - Customer</p>
                <br />
                <br />
                <br />
                <br />
            </div>
        </header>
        <section class="page-section bg-dark text-white mb-0" id="about">
            <div class="container">
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <div class="row">
                    <div class="col-lg-4 ms-auto"><p class="lead">  Admin Registration And Login.</p> <a href="ahome"><button class="btn btn-light">Admin </button></a> </div>
                    <div class="col-lg-4 me-auto"><p class="lead">   Staff Registration And Login.</p><a href="shome"><button class="btn btn-light"  >Staff</button></a>   </div>
                    <div class="col-lg-4 me-auto"><p class="lead">  Customer Registration And Login.</p>     <a href="/chome"><button  class="btn btn-light"  >Customer</button></a>   </div>

                </div>

            </div>
        </section>

    </div>
  </div>

  </div>

    </body>



	);
}


export default Home;
