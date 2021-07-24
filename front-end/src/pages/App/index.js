import React, { Component } from "react"
import Select from 'react-select'
import { withRouter/*, Link*/ } from "react-router-dom"

import Header from "./components/header/index.js"
import api from "../../services/api"
import { logout } from "../../services/auth"
import "./styles.css"

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
//import { option } from "yargs"



class App extends Component {
  /*constructor() {
    super()
  }*/

  state = {
    day: 'Dia',
    slots: [],
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

  loadDay = async () => {
    /*try {
      const response = await api.post("/getDay", {
        params: {}
      })
      this.setState({txs: response.data})
    } catch (err) {
      console.log(err)
    }*/
  }

  setSlot = async () => {
    /*try {
      const response = await api.post("/setSlot", {slot:this.state.slot})
      if (response.data === 1)
        alert ('Reserva feita com sucesso')
      this.loadDay()
    } catch (err) {
      console.log(err)
    }*/
  }

  logoutUser = e => {
    logout()
    this.props.history.push("/")
  }

  onChange = async (response) => {
    let data = response.toString().split(' ')
    data = data[2] + " " + data[1] + " " + data[3]
    this.setState({day: data})
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

  render() {
    return (
      <React.Fragment>
        <div className="App"><Header /></div>
        <button type="submit" className="logout" onClick={this.logoutUser}>Sair</button>
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
              <p>{this.state.value}</p>
            </div>
            <div className="p_text2">Reserva</div>
          </div>
          <hr className="hrm" />
          {this.state.slots.map(slot => <article key={slot.id}>
          <div className="div_label">
            <div className="p_text1"><p>{slot.id}</p></div>
            <div className="p_text2"><p className="status">
            {(() => {
              if (slot.status === '1')
                return "Aberto"
              return "Reservado"
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