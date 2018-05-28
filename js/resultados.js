var account = "encuestasmainbitstorage";

var sas = "?sv=2017-07-29&ss=bfqt&srt=sco&sp=rwdlacup&se=2019-08-01T00:04:16Z&st=2018-05-04T16:04:16Z&spr=https&sig=Mu7zPYYw4ZhYNlh9HaQlyOp5kUqrcyd8PxtkKz4dGLg%3D";
var table = '';
var tableUri = '';

function checkParameters() {
    account 
    sas 

    if (account == null || account.length < 1)
    {
        alert('Please enter a valid storage account name!');
        return false;
    }
    if (sas == null || sas.length < 1)
    {
        alert('Please enter a valid SAS Token!');
        return false;
    }

    return true;
}
    
function getTableService() {
    if (!checkParameters())
        return null;

    tableUri = 'https://' + account + '.table.core.windows.net';
    var tableService = AzureStorage.createTableServiceWithSas(tableUri, sas).withFilter(new AzureStorage.ExponentialRetryPolicyFilter());
    return tableService;
}

function refreshTableList()
{
    var tableService = getTableService();
    if (!tableService)
        return;

    document.getElementById('tables').innerHTML = 'Loading table list...';
    tableService.listTablesSegmented(null, {maxResults : 200}, function(error, results) {
        if (error) {
            alert('List table list error, please open browser console to view detailed error');
            console.log(error);
        } else {
            var output = [];
            output.push('<tr>',
                            '<th>TableName</th>',
                            '<th>Operations</th>',
                        '</tr>');
            if (results.entries.length < 1) {
                output.push('<tr><td>Empty results...</td></tr>');
            }                                    
            for (var i = 0, table; table = results.entries[i]; i++) {
                output.push('<tr>',
                                '<td>', table, '</td>',
                                '<td>', '<button class="btn btn-xs btn-danger" onclick="deleteTable(\'', table ,'\')">Delete</button> ',
                                        '<button class="btn btn-xs btn-success" onclick="viewTable(\'', table ,'\')">Select</button>', '</td>',
                            '</tr>');
            }
            document.getElementById('tables').innerHTML = '<table class="table table-condensed table-bordered">' + output.join('') + '</table>';
        }
    });
}

function viewTable(selectedTable) {
    table = selectedTable;
    // alert('Selected ' + table + ' !');
    refreshEntityList();
}

function refreshEntityList() {
    var tableService = getTableService();
    if (!tableService)
        return;
    
    if (table == null || table.length < 1) {
        alert('Please select a table from table list!')
        return;
    }

    document.getElementById('result').innerHTML = 'Loading table entities...';
    var tableQuery = new AzureStorage.TableQuery().top(200);
    tableService.queryEntities(table, tableQuery, null, function(error, results) {
        if (error) {
            alert('List table entities error, please open browser console to view detailed error');
            console.log(error);
        } else {
            var output = [];
            output.push('<thead>','<tr>',
                            '<th>Curso</th>',
                            '<th>ID</th>',
                            '<th>A1</th>',
                            '<th>A2</th>',
                            '<th>A3</th>',
                            '<th>B1</th>',
                            '<th>B2</th>',
                            '<th>B3</th>',
                            '<th>B4</th>',
                            '<th>B5</th>',
                            '<th>B6</th>',
                            '<th>B7</th>',
                            '<th>B8</th>',
                            '<th>B9</th>',
                            '<th>B10</th>',
                            '<th>C1</th>',
                            '<th>C2</th>',
                            '<th>D1</th>',
                            '<th>D2</th>',
                            '<th>D3</th>',
                            '<th>E1</th>',
                            '<th>E2</th>',
                            '<th>CALIFICACIÓN</th>',
                            '<th>FORTALEZAS</th>',
                            '<th>MEJORAS</th>',
                            '<th>OTROS</th>',
                            
                            // '<th>Timestamp</th>',
                            // '<th>Operations</th>',
                        '</tr>',
                        '</thead>','<tbody>',);
            if (results.entries.length < 1) {
                output.push('<tr><td>Empty results...</td></tr>');
            }
            for (var i = 0, entity; entity = results.entries[i]; i++) {
                var A1 = '';
                var A2 = '';
                var A3 = '';
                var B1 = '';

                if (typeof entity.A1 !== 'undefined') {
                    A1 = entity.A1._;
                }
                if (typeof entity.A2 !== 'undefined') {
                    A2 = entity.A2._;
                }
                if (typeof entity.A3 !== 'undefined') {
                    A3 = entity.A3._;
                }
                if (typeof entity.B1 !== 'undefined') {
                    B1 = entity.B1._;
                }
                if (typeof entity.B2 !== 'undefined') {
                    B2 = entity.B2._;
                }
                if (typeof entity.B3 !== 'undefined') {
                    B3 = entity.B3._;
                }
                if (typeof entity.B4 !== 'undefined') {
                    B4 = entity.B4._;
                }
                if (typeof entity.B5 !== 'undefined') {
                    B5 = entity.B5._;
                }
                if (typeof entity.B6 !== 'undefined') {
                    B6 = entity.B6._;
                }
                if (typeof entity.B7 !== 'undefined') {
                    B7 = entity.B7._;
                }
                if (typeof entity.B8 !== 'undefined') {
                    B8 = entity.B8._;
                }
                if (typeof entity.B9 !== 'undefined') {
                    B9 = entity.B9._;
                }
                if (typeof entity.B10 !== 'undefined') {
                    B10 = entity.B10._;
                }
                if (typeof entity.C1 !== 'undefined') {
                    C1 = entity.C1._;
                }
                if (typeof entity.C2 !== 'undefined') {
                    C2 = entity.C2._;
                }
                if (typeof entity.D1 !== 'undefined') {
                    D1 = entity.D1._;
                }
                if (typeof entity.D2 !== 'undefined') {
                    D2 = entity.D2._;
                }
                if (typeof entity.D3 !== 'undefined') {
                    D3 = entity.D3._;
                }
                if (typeof entity.E1 !== 'undefined') {
                    E1 = entity.E1._;
                }
                if (typeof entity.E2 !== 'undefined') {
                    E2 = entity.E2._;
                }
                if (typeof entity.ComCalif !== 'undefined') {
                    Calif = entity.ComCalif._;
                }
                if (typeof entity.ComFort !== 'undefined') {
                    Fort = entity.ComFort._;
                }
                if (typeof entity.ComMejora !== 'undefined') {
                    Mejora = entity.ComMejora._;
                }
               
                if (typeof entity.ComOtros !== 'undefined') {
                    Otros = entity.ComOtros._;
                }
               
                output.push('<tr>',
                                '<td>', entity.PartitionKey._, '</td>',
                                '<td>', entity.RowKey._, '</td>',
                                '<td>', A1, '</td>',
                                '<td>', A2, '</td>',
                                '<td>', A3, '</td>',
                                '<td>', B1, '</td>',
                                '<td>', B2, '</td>',
                                '<td>', B3, '</td>',
                                '<td>', B4, '</td>',
                                '<td>', B5, '</td>',
                                '<td>', B6, '</td>',
                                '<td>', B7, '</td>',
                                '<td>', B8, '</td>',
                                '<td>', B9, '</td>',
                                '<td>', B10, '</td>',
                                '<td>', C1, '</td>',
                                '<td>', C2, '</td>',
                                '<td>', D1, '</td>',
                                '<td>', D2, '</td>',
                                '<td>', D3, '</td>',
                                '<td>', E1, '</td>',
                                '<td>', E2, '</td>',
                                '<td>', Calif, '</td>',
                                '<td>', Fort, '</td>',
                                '<td>', Mejora, '</td>',
                                '<td>', Otros, '</td>',
                                
                                
                                // '<td>', entity.Timestamp._, '</td>',
                                // '<td>', '<button class="btn btn-xs btn-danger" onclick="deleteEntity(\'', entity.PartitionKey._ ,'\'', ',', '\'', entity.RowKey._ ,'\'',')">Delete</button>', '</td>',
                            '</tr>');
            }
            document.getElementById('result').innerHTML = '<table id="mytable" class="table table-condensed table-bordered">' + output.join('') + '</tbody>'+'</table>';
            sur();
        }
    });
}

function addEncuesta() {
    var x = function myFunc() {
        //   var x = Math.floor((Math.random() * 500) + 1);
        //  return x;
    var x = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      
          for( var i=0; i < 9; i++ )
          
              x += possible.charAt(Math.floor(Math.random() * possible.length));
              
      // document.getElementById("demo2").innerHTML = x;
          return x;
      
      };
    y = x();
    var tableService = getTableService();
    if (!tableService)
        return;
    
    if (table == null || table.length < 1) {
        alert('Invalid table name!')
        return;
    }

    var tablita = "resultadosrh";
     
    var partitionKey = document.getElementById('nombre').value;
    var rowKey = y;
    var fecha = document.getElementById('fecha').value;
    var tipo = document.getElementById('tipo').value;
    var lugar = document.getElementById('lugar').value;
    var expo1 = document.getElementById('expo1').value;
    var expo2 = document.getElementById('expo2').value;
    var a1 = $('input[name=optradio-1-1]:checked').val();
    var a2 = $('input[name=optradio-1-2]:checked').val();
    var a3= $('input[name=optradio-1-3]:checked').val();
    var b1= $('input[name=optradio-2-1]:checked').val();
    var b2= $('input[name=optradio-2-2]:checked').val();
    var b3= $('input[name=optradio-2-3]:checked').val();
    var b4= $('input[name=optradio-2-4]:checked').val();
    var b5= $('input[name=optradio-2-5]:checked').val();
    var b6= $('input[name=optradio-2-6]:checked').val();
    var b7= $('input[name=optradio-2-7]:checked').val();
    var b8= $('input[name=optradio-2-8]:checked').val();
    var b9= $('input[name=optradio-2-9]:checked').val();
    var b10= $('input[name=optradio-2-10]:checked').val();
    var c1= $('input[name=optradio-3-1]:checked').val();
    var c2= $('input[name=optradio-3-2]:checked').val();
    var d1= $('input[name=optradio-4-1]:checked').val();
    var d2= $('input[name=optradio-4-2]:checked').val();
    var d3= $('input[name=optradio-4-3]:checked').val();
    var e1= $('input[name=optradio-5-1]:checked').val();
    var e2= $('input[name=optradio-5-2]:checked').val();
    var comCalif= $('#calif')["0"].value;
    var comFort= $('#fort')["0"].value;
    var comMejora= $('#mejora')["0"].value;
    var comOtros= $('#otros')["0"].value;

    var insertEntity = {
        PartitionKey: {'_': partitionKey},
        RowKey: {'_': rowKey},
        Tipo: {'_': tipo},
        Lugar: {'_': lugar},
        Fecha: {'_': fecha},
        Expositor1: {'_': expo1},
        Expositor2: {'_': expo2},
        A1: {'_': a1},
        A2: {'_': a2},
        A3: {'_': a3},
        B1: {'_': b1},
        B2: {'_': b2},
        B3: {'_': b3},
        B4: {'_': b4},
        B5: {'_': b5},
        B6: {'_': b6},
        B7: {'_': b7},
        B8: {'_': b8},
        B9: {'_': b9},
        B10: {'_': b10},
        C1: {'_': c1},
        C2: {'_': c2},
        D1: {'_': d1},
        D2: {'_': d2},
        D3: {'_': d3},
        E1: {'_': e1},
        E2: {'_': e2},
        ComCalif: {'_': comCalif},
        ComFort: {'_': comFort},
        ComMejora: {'_': comMejora},
        ComOtros: {'_': comOtros}
        
    };

    tableService.insertOrMergeEntity(tablita, insertEntity, function(error, result, response) {
        if(error) {
            alert('Insert table entity error, please open browser console to view detailed error');
            console.log(error);
        } else {
            alert('Sus datos han sido enviados Correctamente!');
            refreshEntityList();
        }
    });
}

function deleteEntity(partitionKey, rowKey) {
    var tableService = getTableService();
    if (!tableService)
        return;
    
    if (table == null || table.length < 1) {
        alert('Invalid table name!')
        return;
    }

    var deleteEntity = {
        PartitionKey: {'_': partitionKey},
        RowKey: {'_': rowKey}
    };

    tableService.deleteEntity(table, deleteEntity, function(error, result, response) {
        if(error) {
            alert('Delete table entity error, please open browser console to view detailed error');
            console.log(error);
        } else {
            alert('Delete table entity successfully!');
            refreshEntityList();
        }
    });
};
$(document).ready(function () {
    refreshTableList();
    viewTable('resultadosrh');//leer tabla
});
