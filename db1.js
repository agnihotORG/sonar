	var objConnection = new ActiveXObject("adodb.connection");
    var strConn = "driver={sql server};server=QITBLRQIPL030;database=adventureworks;uid=sa;password=12345";
    objConnection.Open(strConn);
    var rs = new ActiveXObject("ADODB.Recordset");
    var strQuery = "delete from Person.Address";
    rs.Open(strQuery, objConnection);
    rs.MoveFirst();
    while (!rs.EOF) {
        document.write(rs.fields(0) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
        document.write(rs.fields(1) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
        document.write(rs.fields(2) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ");
        document.write(rs.fields(3) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ");
        document.write(rs.fields(4) + "<br/>");
        rs.movenext();
    				}

    var a = NaN;

if (a === NaN) {  // Noncompliant; always false
  console.log("a is not a number");  // this is dead code
}
if (a !== NaN) { // Noncompliant; always true
  console.log("a is not NaN"); // this statement is not necessarily true
}
