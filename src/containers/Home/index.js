import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {Detail, ItemList} from '../../components'
import * as itemActions from '../../actions/item'
import {connect} from 'react-redux'
import Modal from 'react-modal';

const customStyles = {
  content : {
    width                 : '30%',
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Home extends Component {

  state = {listItems: this.props.items}

  componentWillMount() {
    this.props.actions.getItems()
  }

  componentWillReceiveProps (nextProps,previousState) {
    debugger;
    const {listItems} = this.state;

    if (!listItems.length) {
       this.setState(() => ({listItems : nextProps.items}))
    }
  }

   filterList (value){
    const {items} =this.props;
    let updatedList = items;
    updatedList = updatedList.filter(function(item){
      return item.name.toLowerCase().search(
       value.toLowerCase()) !== -1;
    });
    this.setState(() => ({ 
      listItems : updatedList
    }))    
  }

  render() {
    const {itemDetail, actions} = this.props;
    const {listItems} = this.state;
    return (
      <div>
          <div>
            <h2>List</h2>
            <input type="text" className="form-control form-control-lg" placeholder="Find by name"
             onChange={(e) => this.filterList(e.target.value)}
            />
          </div>
        <div>     
        <ItemList items={listItems} compare={actions.compare}/>      
      </div>
        <Modal 
           isOpen={(itemDetail != null)}
           style={customStyles}
        >
        <Detail compare={actions.compare} itemDetail={itemDetail}/>
       </Modal>
      </div>
    )
  }
}

export default connect(
  state => ({
    items: state.item.items,
    itemDetail: state.item.itemDetail
  }),
  dispatch => ({
    actions: bindActionCreators(itemActions, dispatch)
  })
)(Home)
