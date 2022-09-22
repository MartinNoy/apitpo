import React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import GridCellExpand from '../../Assets/js/GridCellExpand';


GridCellExpand.propTypes = {
    value: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
  };
  
  function renderCellExpand(params) {
    return (
      <GridCellExpand value={params.value || ''} width={params.colDef.computedWidth} />
    );
  }
  
  renderCellExpand.propTypes = {
    /**
     * The column of the row that the current cell belongs to.
     */
    colDef: PropTypes.object.isRequired,
    /**
     * The cell value.
     * If the column has `valueGetter`, use `params.row` to directly access the fields.
     */
    value: PropTypes.string,
  };
  

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'NombreConExperiencia',
        headerName: 'Profesor a cargo',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width:500,
        valueGetter: (params) =>
            `${params.row.Profesor || ''} ${': '+params.row.Experiencia || ''}`,
        hideable: false,
        renderCell: renderCellExpand,
    },
    {
        field: 'Nombre',
        headerName: 'Nombre de clase',
        width: 150,
        editable: true,
    },
    {
        field: 'Duracion',
        headerName: 'Carga horaria',
        type: 'number',
        width: 150,
        editable: true,
        hideable: false
    },
    {
        field: 'Frecuencia',
        headerName: 'Frecuencia',
        type: 'text',
        width: 150,
        editable: true,
        hideable: false
    },
    {
        field: 'Costo',
        headerName: 'Costo',
        type: 'currency',
        width: 150,
        editable: true,
        hideable: false
    },
    {
        field: 'Comentarios',
        headerName: 'Comentarios de Alumnos',
        type: 'text',
        width: 500,
        editable: true,
        hideable: false,
        renderCell: renderCellExpand,
    },
];     

const rows = [
    { id: 1, Nombre: 'Jon', Duracion: 35, Profesor: 'Martin',Experiencia: 'Soy muy buen profesor jkshaddsabhkfgsajlfhajkhdklsbafkjhsalkgfskahlg hfsaohlfskj ahl fsilah dsialh fusa', Calificacion: '', Frecuencia : '', Costo: 10, Comentarios: ''},
    { id: 2, Nombre: 'Cersei', Duracion: 42, Profesor: 'Martin',Experiencia: 'Soy muy buen profesor', Calificacion: '', Frecuencia : '', Costo: 10, Comentarios: ''},
    { id: 3, Nombre: 'Jaime', Duracion: 45, Profesor: 'Martin',Experiencia: 'Soy muy buen profesor', Calificacion: '', Frecuencia : '', Costo: 10, Comentarios: ''},
    { id: 4, Nombre: 'Arya', Duracion: 16, Profesor: 'Martin',Experiencia: 'Soy muy buen profesor', Calificacion: '', Frecuencia : '', Costo: 10, Comentarios: ''},
    { id: 5, Nombre: 'Daenerys', Duracion: null, Profesor: 'Martin',Experiencia: 'Soy muy buen profesor', Calificacion: '', Frecuencia : '', Costo: 10, Comentarios: ''},
    { id: 6, Nombre: null, Duracion: 150, Profesor: 'Martin',Experiencia: 'Soy muy buen profesor', Calificacion: '', Frecuencia : '', Costo: 10, Comentarios: ''},
    { id: 7, Nombre: 'Ferrara', Duracion: 44, Profesor: 'Martin',Experiencia: 'Soy muy buen profesor', Calificacion: '', Frecuencia : '', Costo: 10, Comentarios: ''},
    { id: 8, Nombre: 'Rossini', Duracion: 36, Profesor: 'Martin',Experiencia: 'Soy muy buen profesor', Calificacion: '', Frecuencia : '', Costo: 10, Comentarios: ''},
    { id: 9, Nombre: 'Harvey', Duracion: 65, Profesor: 'Martin',Experiencia: 'Soy muy buen profesor', Calificacion: '', Frecuencia : '', Costo: 10, Comentarios: ''},
];
export default function searchClases() {
    return (
        <React.Fragment>
            <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ maxHeight: '93vh', minHeight: '93vh' }}
            >

            <Box sx={{ height: 800, width: '75%' }}>
                <DataGrid
                    components={{ Toolbar: GridToolbar }}
                    rows={rows}
                    columns={columns}
                    pDuracionSize={5}
                    hideFooter
                    density = 'comfortable'
                    />
            </Box>
            </Grid>
        </React.Fragment>
    );
}