import React from 'react'

const PlanetsData = () => {
  return (
    <div className='flex flex-col justify-center m-20'>
      <table>
        <caption>
          Data about the planets of our solar system (Planetary facts taken from Nasa's Planetary Fact Sheet - Metric).
        </caption>
        <colgroup>
          <col span="2"></col>
          <col span="9"></col>
        </colgroup>
        <thead>
          <tr>
            <td colSpan="2"></td>
            <th scope="col">Name</th>
            <th scope="col">Mass</th>
            <th scope="col">Diameter</th>
            <th scope="col">Density</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th rowSpan="4" colSpan="2" scope="rowgroup">Terrestrial planets</th>
            <th scope="row">Mercury</th>
            <td>0.330</td>
            <td>4,879</td>
            <td>5427</td>
          </tr>
          <tr>
            <th scope="row">Venus</th>
            <td>4.87</td>
            <td>12,104</td>
            <td>5243</td>
          </tr>
          <tr>
            <th scope="row">Earth</th>
            <td>4.87</td>
            <td>12,104</td>
            <td>5243</td>
          </tr>
          <tr>
            <th scope="row">Mars</th>
            <td>4.87</td>
            <td>12,104</td>
            <td>5243</td>
          </tr>
          <tr>
            <th rowSpan="4" scope="rowgroup">
              Jovian planets
            </th>
            <th rowSpan="2" scope="rowgroup">
              Gas giants
            </th>
            <th scope="row">Jupiter</th>
            <td>4.87</td>
            <td>12,104</td>
            <td>5243</td>
          </tr>
          <tr>
            <th scope="row">Saturn</th>
            <td>4.87</td>
            <td>12,104</td>
            <td>5243</td>
          </tr>
          <tr>
            <th rowSpan="2" scope="rowgroup">
              Ice giants
            </th>
            <th scope="row">Uranus</th>
            <td>4.87</td>
            <td>12,104</td>
            <td>5243</td>
          </tr>
          <tr>
            <th scope="row">Neptune</th>
            <td>4.87</td>
            <td>12,104</td>
            <td>5243</td>
          </tr>
          <tr>
            <th colSpan="2" scope="rowgroup">
              Dwarf planets
            </th>
            <th scope="row">Pluto</th>
            <td>4.87</td>
            <td>12,104</td>
            <td>5243</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default PlanetsData