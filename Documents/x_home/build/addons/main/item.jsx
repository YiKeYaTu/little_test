import React from 'react';
let Item = React.createClass({
	render () {
		let keys = this.props.keys;
		let src = require('../../images/feature-pic3.jpg');
		return (
			<div style={{
				width: '23%',
				height: '300px',
				marginTop: '20px',
				boxShadow: '0px 0px 3px rgb(150, 150, 150)',
			    WebkitBoxShadow: '0px 0px 3px rgb(150, 150, 150)',
			    MozBoxShadow: '0px 0px 3px rgb(150, 150, 150)',
			    OBoxShadow: '0px 0px 3px rgb(150, 150, 150)',
			    float: 'left',
			    boxSizing: 'border-box',
			    padding: '20px 20px',
			    marginLeft: keys % 4 === 0 ? '1%' : '',
			    marginRight: keys % 4 === 3 ? '' : '2%',
			}}>
				<img style={{
					width: '100%',
					maxHeight: '170px',
				}} src='http://172.22.146.3/CubeApiStore/img/carousel_back_2.jpg'/>
				<p style={{
					marginTop: '20px',
					textAlign: 'center',
					paddingBottom: '20px',
					color: '#666',
					fontWeight: 'bold',
					borderBottom: '1px solid #00BFFF'
				}}>
					这个API的名字是啥
				</p>
				<div>
					<p style={{
						width: '50%',
						height: '38px',
						lineHeight: '46px',
						fontWeight: 'bold',
						fontSize: '20px',
						color: '#666',
						float: 'left'
					}}>
						<i style={{
							fontSize: '16px',
							position: 'relative',
							top: '-2px'
						}} className='iconfont'>&#xe6bf;</i>100
					</p>
					<div className='add-shop' style={{
						float: 'left',
						width: '50%',
						height: '38px',
						lineHeight: '38px',
						background: '#00BFFF',
						textAlign: 'center',
						color: '#fff',
						fontSize: '14px',
						cursor: 'pointer',
						WebkitTransition: 'all .9s',
					    MozTransition: 'all .9s',
					    OTransition: 'all .9s',
					    MsTransition: 'all .9s',
					}}>
						加入购物车
					</div>	
				</div>
			</div>
		);
	}
});

export default Item;