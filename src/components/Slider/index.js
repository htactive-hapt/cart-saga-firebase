import React from 'react'
import './styles.scss'
import { Row, Col, Layout, Carousel } from 'antd';
import slider1 from '../../assets/slider/1.png';
import slider2 from '../../assets/slider/2.png';
import slider3 from '../../assets/slider/3.png';
import slider4 from '../../assets/slider/4.png';
import slider5 from '../../assets/slider/5.png';
import slider6 from '../../assets/slider/6.png';
import slider7 from '../../assets/slider/7.png';
import 'antd/dist/antd.css';
import ShowProducts from '../../components/Products/ShowProduct'
import ContentFooter from '../../components/Footer'
import { Pagination } from 'antd';
const { Header, Content, Footer } = Layout;


const Slider = props => {
  return (
    <div className='slider'>
      <div className='wrap'>
        <Layout>
          <Content className="site-layout" style={{ padding: '0 50px', marginTop: 30, marginBottom: 30 }}>

            <div className="site-layout-background" style={{ padding: 24, minHeight: 800, }}>
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
                    </Carousel>
                  </Col>
                  <Col className="item-advert2" span={6}>
                    <Row>
                      <Col span={24}><img src={slider7} /></Col>
                    </Row>
                    <Row>
                      <Col span={24}><img className="img-item-2" src={slider5} /></Col>
                    </Row>
                  </Col>
                </Row>
                <ShowProducts />
                <ContentFooter />
              </div>
            </div>
          </Content>
        </Layout>
      </div>
    </div>
  )
}

export default Slider