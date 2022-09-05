import Menu from '../components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { jumbotron, container } from 'reactstrap';

function Sobre() {
  return (
    <div>
      <Menu />
      <jumbotron fluid className="head-sobre">
        <style>{`.head-sobre{
                    padding-top: 80px;
                    padding-bottom: 80px;
                    background-color: #000;
                    color: #fff;
                    margin-bottom: 0rem !important;
                }`}</style>
        <container>
          <div className="text-center">
            <h1 className="display-4">Sobre a Empresa</h1>
          </div>
        </container>
      </jumbotron>
      <jumbotron fluid className="sobre">
        <style>{`.sobre{
            padding-top: 80px;
            padding-bottom: 80px;
            background-color: #fff;
            margin-botton: 0rem !important;            
        }
        .featurette-divider{
            margin: 5rem 0;
        }
        
        `}</style>
        <container>
          <div>
            <div className="row featurette">
              <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading fw-normal lh-1">
                  Oh yeah, it’s that good.{' '}
                  <span className="text-muted">See for yourself.</span>
                </h2>
                <p className="lead">
                  Another featurette? Of course. More placeholder content here
                  to give you an idea of how this layout would work with some
                  actual real-world content in place.
                </p>
              </div>
              <div className="col-md-5 order-md-1">
                <svg
                  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                  width="500"
                  height="500"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: 500x500"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#eee" />
                  <text x="50%" y="50%" fill="#aaa" dy=".3em">
                    500x500
                  </text>
                </svg>
              </div>
            </div>
            <hr class="featurette-divider"></hr>
            <div className="row featurette">
              <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading fw-normal lh-1">
                  Oh yeah, it’s that good.{' '}
                  <span className="text-muted">See for yourself.</span>
                </h2>
                <p className="lead">
                  Another featurette? Of course. More placeholder content here
                  to give you an idea of how this layout would work with some
                  actual real-world content in place.
                </p>
              </div>
              <div className="col-md-5 order-md-1">
                <svg
                  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                  width="500"
                  height="500"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: 500x500"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#eee" />
                  <text x="50%" y="50%" fill="#aaa" dy=".3em">
                    500x500
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </container>
      </jumbotron>
    </div>
  );
}

export default Sobre;
