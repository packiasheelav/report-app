import React, { Component } from 'react';
import '../style.css';

class ReportResults extends Component {

    render() {
        const data = this.props.dataArg;
        return (
            <div>
                <table>
                <tbody>
                    <tr>
                        <th onClick={() => this.props.sorting()}>Id</th>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                        <th>State</th>
                        <th onClick={() => this.props.sorting()}>Pin</th>
                    </tr>
                        {
                            data.map(function (report) {
                                return (
                                    <tr key={report.id}>
                                        <td>{report.id}</td>
                                        <td>{report.Company}</td>
                                        <td>{report.Contact}</td>
                                        <td>{report.Country}</td>
                                        <td>{report.State}</td>
                                        <td>{report.Pin}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
export default ReportResults;