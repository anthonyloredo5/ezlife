import React from 'react';
import AddActivity from './AddWorkout';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function ActivityList(props) {
    const { activities, addActivity, setOpenSnackbar, setEditing } = props;
    console.log({
        activities: activities
    });
    return (
                    <TableContainer component={Paper} >
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Type</TableCell>
                                    <TableCell>Duration</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    Object.values(activities).map((activity, i) => {
                                        let { name, type, duration } = activity;
                                        switch (activity.type) {
                                            case 1:
                                                type = "Strength Training";
                                                break;
                                            case 2:
                                                type = "Running";
                                                break;
                                            case 3:
                                                type = "Cycling";
                                                break;
                                            case 4:
                                                type = "CrossFit";
                                                break;
                                            case 5:
                                                type = "Swimming";
                                                break;
                                            case 6:
                                                type = "Yoga";
                                                break;
                                            default:
                                                type = "Not set";
                                        };
                                        return (
                                            <TableRow key={i}>
                                                <TableCell>{name}</TableCell>
                                                <TableCell>{type}</TableCell>
                                                <TableCell>{duration}</TableCell>
                                                <TableCell>
                                                    {/* <DeleteIcon
                                                        onClick={e => deleteActivity(i)}
                                                    />
                                                    <EditIcon
                                                        onClick={e => editActivity(activity, i)}
                                                        style={{ marginLeft: "20px" }}
                                                    /> */}
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
    )
};
export default ActivityList;