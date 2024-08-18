import React from 'react';
import { Card, CardBody, CardText, CardFooter } from 'react-bootstrap';
import './Reviews.css';
import Person1 from '../utils/images/person1.jpg';
import Person2 from '../utils/images/person2.jpg';
import Person3 from '../utils/images/person3.jpg';
import Person4 from '../utils/images/person4.jpg';

const Reviews = () => {
  return (
    <div className="reviews-section container">
      <h2 className="text-center mb-5 text-uppercase fw-bold fs-1">Reviews</h2>
      <div className="row g-4">
        <div className="col-lg-6">
          <Card className="h-100 shadow">
            <CardBody>
              <div className="p-4">
                <CardText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iste culpa perspiciatis. Magnam, explicabo cumque.
                </CardText>
              </div>
            </CardBody>
            <CardFooter className="d-flex align-items-center">
              <img src={Person1} className="img-fluid rounded-circle mx-3 shadow" alt="John Mike" />
              <div className="text-success fw-bold">John Mike</div>
            </CardFooter>
          </Card>
        </div>
        <div className="col-lg-6">
          <Card className="h-100 shadow">
            <CardBody>
              <div className="p-4">
                <CardText>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, mollitia?
                </CardText>
              </div>
            </CardBody>
            <CardFooter className="d-flex align-items-center">
              <img src={Person2} className="img-fluid rounded-circle mx-3 shadow" alt="Maria Cruz" />
              <div className="text-success fw-bold">Maria Cruz</div>
            </CardFooter>
          </Card>
        </div>
        <div className="col-lg-6">
          <Card className="h-100 shadow">
            <CardBody>
              <div className="p-4">
                <CardText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolor itaque reprehenderit minus tempore. Iste quibusdam facilis excepturi nihil maiores!
                </CardText>
              </div>
            </CardBody>
            <CardFooter className="d-flex align-items-center">
              <img src={Person3} className="img-fluid rounded-circle mx-3 shadow" alt="Anna Gold" />
              <div className="text-success fw-bold">Anna Gold</div>
            </CardFooter>
          </Card>
        </div>
        <div className="col-lg-6">
          <Card className="h-100 shadow">
            <CardBody>
              <div className="p-4">
                <CardText>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum et voluptate minus error suscipit officiis placeat repudiandae quibusdam officia tempora, reprehenderit, enim, quidem exercitationem laborum!
                </CardText>
              </div>
            </CardBody>
            <CardFooter className="d-flex align-items-center">
              <img src={Person4} className="img-fluid rounded-circle mx-3 shadow" alt="Nick Burn" />
              <div className="text-success fw-bold">Nick Burn</div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
