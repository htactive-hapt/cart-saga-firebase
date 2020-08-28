import React from 'react';
import { Row, Col, Layout, Carousel } from 'antd';
import './Content.css';
import slider1 from '../../assets/slider/1.png';
import slider2 from '../../assets/slider/2.png';
import slider3 from '../../assets/slider/3.png';
import slider4 from '../../assets/slider/4.png';
import slider5 from '../../assets/slider/5.png';
import slider6 from '../../assets/slider/6.png';
import slider7 from '../../assets/slider/7.png';
import 'antd/dist/antd.css';
const { Header, Content, Footer } = Layout;

// const contentStyle = {
//   height: '160px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// };

function Contents() {
  return (
    <div>
      <Layout>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 100 }}>

          <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            <div className="container-slider">
              <Row>
                <Col className="item-advert1" span={18}>
                  <Carousel autoplay>
                    <div>
                      <h3 ><img src={slider1} /></h3>
                    </div>
                    <div>
                      <h3><img src={slider2} /></h3>
                    </div>
                    <div>
                      <h3 ><img src={slider3} /></h3>
                    </div>
                    <div>
                      <h3><img src={slider4} /></h3>
                    </div>
                    <div>
                      <h3 ><img src={slider5} /></h3>
                    </div>
                    <div>
                      <h3><img src={slider6} /></h3>
                    </div>
                    <div>
                      <h3 ><img src={slider7} /></h3>
                    </div>
                  </Carousel>,
                </Col>
                <Col className="item-advert2" span={6}>
                  <Row>
                    <Col span={24}><img src={slider7} /></Col>
                  </Row>
                  <Row>
                    <Col span={24}><img src={slider4} /></Col>
                  </Row>
                </Col>
              </Row>,
            </div>
          </div>
        </Content>
      </Layout>,
    </div>
  );
}

export default Contents;
;

