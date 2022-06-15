import React, {Component} from 'react';
import {useState} from 'react';

class MainContent extends Component{
  render() {
    return(
      <div className="container-fluid px-4">
          <h1 className="mt-4">Tables</h1>
          <ol className="breadcrumb mb-4">
              <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
              <li className="breadcrumb-item active">Tables</li>
          </ol>
          <div className="card mb-4">
              <div className="card-body">
                  DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the
                  <a target="_blank" href="https://datatables.net/">official DataTables documentation</a> .
              </div>
          </div>
          <div className="card mb-4">
              <div className="card-header">
                  <i className="fas fa-table me-1"></i>
                  DataTable Example
              </div>
              <div className="card-body">
                <this.filterTable/>
                <this.tableContent/>
                <this.pagination/>
              </div>
          </div>
      </div>
    );
  }

  filterTable(){
    return(
      <div className="dataTable-top">
          <div className="dataTable-dropdown">
              <label>
                <select className="dataTable-selector">
                  <option value="5">5</option>
                  <option value="10" selected="">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="25">25</option>
                </select> entries per page
              </label>
          </div>
          <div className="dataTable-search">
            <input className="dataTable-input" placeholder="Search..." type="text">
            </input>
          </div>
      </div>
      );
  }
  tableContent(){
    let employeeList = [['Tiger Nixon', 'System Architect', 'Edinburgh', '61', '2011/04/25', '$320,800'], ['Garrett Winters', 'Accountant', 'Tokyo', '63', '2011/07/25', '$170,750'], ['Ashton Cox', 'Junior Technical Author', 'San Francisco', '66', 
    '2009/01/12', '$86,000'], ['Cedric Kelly', 'Senior Javascript Developer', 'Edinburgh', '22', '2012/03/29', '$433,060'], ['Airi Satou', 'Accountant', 'Tokyo', '33', '2008/11/28', '$162,700'], ['Brielle Williamson', 'Integration Specialist', 'New York', '61', '2012/12/02', '$372,000'], ['Herrod Chandler', 'Sales Assistant', 'San Francisco', '59', '2012/08/06', '$137,500'], ['Rhona Davidson', 'Integration Specialist', 'Tokyo', '55', '2010/10/14', 
    '$327,900'], ['Colleen Hurst', 'Javascript Developer', 'San Francisco', '39', '2009/09/15', '$205,500'], ['Sonya Frost', 'Software Engineer', 'Edinburgh', '23', '2008/12/13', '$103,600'], ['Jena Gaines', 'Office Manager', 'London', '30', '2008/12/19', '$90,560'], ['Quinn Flynn', 'Support Lead', 'Edinburgh', '22', '2013/03/03', '$342,000'], ['Charde Marshall', 'Regional Director', 'San Francisco', '36', '2008/10/16', '$470,600'], ['Haley Kennedy', 'Senior Marketing Designer', 'London', '43', '2012/12/18', '$313,500'], ['Tatyana Fitzpatrick', 'Regional Director', 'London', '19', '2010/03/17', '$385,750'], ['Michael Silva', 'Marketing Designer', 'London', '66', '2012/11/27', '$198,500'], ['Paul Byrd', 'Chief Financial Officer (CFO)', 'New York', '64', '2010/06/09', '$725,000'], ['Gloria Little', 'Systems Administrator', 'New York', '59', '2009/04/10', ' $237,500'], ['Bradley Greer', 'Software Engineer', 'London', '41', '2012/10/13', '$132,000'], ['Dai Rios', 'Personnel Lead', 'Edinburgh', '35', '2012/09/26', '$217,500'], ['Jenette Caldwell', 'Development Lead', 'New York', '30', '2011/09/03', '$345,000'], ['Yuri Berry', 'Chief Marketing Officer (CMO)', 'New York', '40', '2009/06/25', 
    '$675,000'], ['Caesar Vance', 'Pre-Sales Support', 'New York', '21', '2011/12/12', '$106,450'], ['Doris Wilder', 'Sales Assistant', 'Sidney', '23', '2010/09/20', '$85,600'], ['Angelica Ramos', 'Chief Executive Officer (CEO)', 'London', '47', '2009/10/09', '$1,200,000'], ['Gavin Joyce', 'Developer', 'Edinburgh', '42', '2010/12/22', '$92,575'], ['Jennifer Chang', 'Regional Director', 'Singapore', '28', '2010/11/14', '$357,650'], ['Brenden Wagner', 'Software Engineer', 'San Francisco', '28', '2011/06/07', '$206,850'], ['Fiona Green', 'Chief Operating Officer (COO)', 'San Francisco', '48', '2010/03/11', '$850,000'], ['Shou Itou', 'Regional Marketing', 'Tokyo', '20', '2011/08/14', '$163,000'], ['Michelle House', 'Integration Specialist', 'Sidney', '37', '2011/06/02', '$95,400'], ['Suki Burks', 'Developer', 'London', '53', '2009/10/22', '$114,500'], ['Prescott Bartlett', 'Technical Author', 'London', '27', '2011/05/07', '$145,000'], ['Gavin Cortez', 'Team Leader', 'San Francisco', '22', '2008/10/26', '$235,500'], ['Martena Mccray', 'Post-Sales support', 'Edinburgh', '46', '2011/03/09', '$324,050'], ['Unity Butler', 'Marketing Designer', 'San Francisco', '47', '2009/12/09', '$85,675'], ['Howard Hatfield', 'Office Manager', 'San Francisco', '51', '2008/12/16', '$164,500'], ['Hope Fuentes', 'Secretary', 'San Francisco', '41', '2010/02/12', '$109,850'], ['Vivian Harrell',  'Financial Controller', 'San Francisco', '62', '2009/02/14', '$452,500'], ['Timothy Mooney', 'Office Manager', 'London', '37', '2008/12/11', '$136,200'], ['Jackson Bradshaw', 'Director', 'New York', '65', '2008/09/26', '$645,750'], ['Olivia Liang', 'Support Engineer', 'Singapore', '64', '2011/02/03', '$234,500'], ['Bruno Nash', 'Software Engineer', 'London', '38', '2011/05/03', '$163,500'], ['Sakura Yamamoto', 'Support Engineer', 'Tokyo', '37', '2009/08/19', '$139,575'], ['Thor Walton', 'Developer', 'New York', '61', '2013/08/11', '$98,540'], ['Finn Camacho', 'Support Engineer', 'San Francisco', '47', '2009/07/07', '$87,500'], ['Serge Baldwin', 'Data Coordinator', 'Singapore', '64', '2012/04/09', '$138,575'], ['Zenaida Frank', 'Software Engineer', 'New York', '63', '2010/01/04', '$125,250'], ['Zorita Serrano', 'Software Engineer', 'San Francisco', '56', '2012/06/01', '$115,000'], ['Jennifer Acosta', 'Junior Javascript Developer', 'Edinburgh', '43', '2013/02/01', '$75,650'], ['Cara Stevens', 
    'Sales Assistant', 'New York', '46', '2011/12/06', '$145,600'], ['Hermione Butler', 'Regional Director', 'London', '47', '2011/03/21', '$356,250'], ['Lael Greer', 'Systems Administrator', 'London', '21', '2009/04/27', '$103,500'], ['Jonas Alexander', 'Developer', 'San Francisco', '30', '2010/07/14', '$86,500'], ['Shad Decker', 'Regional Director', 'Edinburgh', '51', 
    '2008/11/13', '$183,000'], ['Michael Bruce', 'Javascript Developer', 'Singapore', '29', '2011/06/27', '$183,000'], ['Donna Snider', 'Customer Support', 'New York', '27', '2011/01/25', '$112,000']];
    let employeeListReturn = employeeList.map((item,index) =>{
        return(
            <tr>
              <td>{item[0]}</td>
              <td>{item[1]}</td>
              <td>{item[2]}</td>
              <td>{item[3]}</td>
              <td>{item[4]}</td>
              <td>{item[5]}</td>
            </tr>
          );
      });
    let headerColumn = ['Name','Position','Office','Age','Start','Salary']
    let headerColumnReturn = headerColumn.map(head =>{
        return <th data-sortable=""><a href="#" className="dataTable-sorter">{head}</a></th>

      });
    return(
      <table id="datatablesSimple" className="dataTable-table">
          <thead>
              <tr>
                {headerColumnReturn}
              </tr>
          </thead>
          <tbody>
            {employeeListReturn}
          </tbody>
      </table>
      );
  }

  pagination(){
    return(
      <div className="dataTable-bottom">
          <div className="dataTable-info">Showing 1 to 10 of 57 entries</div>
          <nav className="dataTable-pagination">
              <ul className="dataTable-pagination-list">
                  <li className="active"><a href="#" data-page="1">1</a></li>
                  <li className=""><a href="#" data-page="2">2</a></li>
                  <li className=""><a href="#" data-page="3">3</a></li>
                  <li className=""><a href="#" data-page="4">4</a></li>
                  <li className=""><a href="#" data-page="5">5</a></li>
                  <li className=""><a href="#" data-page="6">6</a></li>
                  <li className="pager"><a href="#" data-page="2">›</a></li>
              </ul>
          </nav>
      </div>
      );
  }
}

export default MainContent;