import React, { Component } from "react"
import Select from 'react-select'
import { withRouter, Link } from "react-router-dom"

import Header from "./components/header/index.js"
import api from "../../services/api"
import { logout } from "../../services/auth"
import "./styles.css"

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
//import { option } from "yargs"



class App extends Component {
  constructor() {
    super()
    this.loadReserves()
  }

  state = {
    reserves: [],
    day: 'Dia',
    slots: [/*{slot:'1', apartment:'1'}*/],
    slot_select: '',
    options: [
      { value: '1', label: '7:00 h' },
      { value: '2', label: '8:00 h' },
      { value: '3', label: '9:00 h' },
      { value: '4', label: '10:00 h' },
      { value: '5', label: '11:00 h' },
      { value: '6', label: '12:00 h' },
      { value: '7', label: '13:00 h' },
      { value: '8', label: '14:00 h' },
      { value: '9', label: '15:00 h' },
      { value: '10', label: '16:00 h' },
      { value: '11', label: '17:00 h' },
      { value: '12', label: '18:00 h' },
      { value: '13', label: '19:00 h' },
      { value: '14', label: '20:00 h' },
      { value: '15', label: '21:00 h' }
    ]
  }

  loadReserves = async () => {
    try {
      const response = await api.post("/getUserReserves", {})
      this.setState({reserves: response.data})
    } catch (err) {
      console.log(err)
    }
  } 

  loadDay = async (day_selected) => {
    try {
      const response = await api.post("/getDay", {day:day_selected})
      this.setState({slots: response.data})
    } catch (err) {
      console.log(err)
    }
  }

  logoutUser = e => {
    logout()
    this.props.history.push("/")
  }

  onChange = async (response) => {
    let data = response.toString().split(' ')
    data = data[2] + " " + data[1] + " " + data[3]
    this.setState({day: data})
    this.loadDay(data)
  }

  reserve = async () => {
    if (this.state.day === 'Dia') {
      alert('Escolha o dia.')
    } else if (this.state.slot_select === '') {
      alert('Selecione o horário.')
    } else {
      try {
        const response = await api.post(`/registerDate`, {day:this.state.day, slot:this.state.slot_select, apartment:"1"})
        if (response.data === 0) {
          alert('Reserva realizada com sucesso.')
        } else {
          alert('Horario já reservado.')
        }
      } catch (err) {
        console.log(err)
      }
    }
  }

  cancel = async (reserve_id) => {
    if (window.confirm('Você tem certeza que deseja cancelar essa reserva?')) {
      await api.post(`/cancelReserve`, {id:reserve_id})
      this.loadReserves()
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="App"><Header /></div>
        <button type="submit" className="logout" onClick={this.logoutUser}>Sair</button>
        <div className="txs-list">
          <div className="div_label">
            <div className="p_text1">
              <p>Reserva</p>
            </div>
            <div className="p_text2"></div>
          </div>
          <hr className="hrm" />
          
          {this.state.reserves.map(reserve => <article key={reserve.id}>
          <div className="div_label">
            <div className="p_text1"><p className='reserve'>
              {(() => {
                switch (reserve.slot) {
                  case '1':
                    return reserve.day + ' 7:00 h'
                  case '2':
                    return reserve.day + ' 8:00 h'
                  case '3':
                    return reserve.day + ' 9:00 h'
                  case '4':
                    return reserve.day + ' 10:00 h'
                  case '5':
                    return reserve.day + ' 11:00 h'
                  case '6':
                    return reserve.day + ' 12:00 h'
                  case '7':
                    return reserve.day + ' 13:00 h'
                  case '8':
                    return reserve.day + ' 14:00 h'  
                  case '9':
                    return reserve.day + ' 15:00 h'
                  case '10':
                    return reserve.day + ' 16:00 h'
                  case '11':
                    return reserve.day + ' 17:00 h'
                  case '12':
                    return reserve.day + ' 18:00 h'
                  case '13':
                    return reserve.day + ' 19:00 h'
                  case '14':
                    return reserve.day + ' 20:00 h'
                  case '15':
                    return reserve.day + ' 21:00 h'
                  default:
                    return ''
                }
              })()}
            </p></div>
            <div className="p_text2">
              <div className="div_cancel">
                <Link to='/app' type="submit" className="cancel" onClick={() => this.cancel(reserve.id)}>Cancelar</Link>
              </div>
            </div>
          </div>
          </article>)
        }</div>
        <div className="main-div1">
          <div className="div_label">
            <p>Calendário</p>
          </div>
          <div className="div-calendar">
            <Calendar
              onChange={this.onChange}
              value={this.value}
            />
          </div>
          <div className="div-reserve">
            <div className="div_label">
              <p>Horário: </p>
            </div>
            <div className="select-field" >
              <Select id="select_field" options={this.state.options} onChange={e => this.setState({ slot_select: e.value})}/>
            </div>
            <div className="div2">
              <button type="submit" className="button1a" onClick={this.reserve}>Reservar</button>
            </div>
          </div>
        </div>
        <div className="txs-list">
          <div className="div_label">
            <div className="p_text1">
              <p>{this.state.day}</p>
            </div>
            <div className="p_text2">Apartamento</div>
          </div>
          <hr className="hrm" />
          {this.state.slots.map(slot => <article key={slot.slot}>
          <div className="div_label">
            <div className="p_text1"><p className='slot'>
              {(() => {
                switch (slot.slot) {
                  case '1':
                    return '7:00 h'
                  case '2':
                    return '8:00 h'
                  case '3':
                    return '9:00 h'
                  case '4':
                    return '10:00 h'
                  case '5':
                    return '11:00 h'
                  case '6':
                    return '12:00 h'
                  case '7':
                    return '13:00 h'
                  case '8':
                    return '14:00 h'  
                  case '9':
                    return '15:00 h'
                  case '10':
                    return '16:00 h'
                  case '11':
                    return '17:00 h'
                  case '12':
                    return '18:00 h'
                  case '13':
                    return '19:00 h'
                  case '14':
                    return '20:00 h'
                  case '15':
                    return '21:00 h'
                  default:
                      return ''
                }
              })()}
            </p></div>
            <div className="p_text2"><p className="status">
              {(() => {
                if (slot.apartment !== '')
                  return slot.apartment
                return 'Livre'
              })()}
            </p></div>
          </div>
          </article>)
        }</div>
      </React.Fragment>
    )
  }
}

export default withRouter(App)