#!"C:\xampp\perl\bin\perl.exe"
$str = $ENV{"QUERY_STRING"};
print "Content-type: text/html\n\n";

print "<!DOCTYPE html>\n";
print "<html lang=\"ja\">\n";
print "<head>\n";
print "<meta charset=\"UTF-8\">\n";
print "<title>CGI</title>\n";
print "</head>\n";
print "<body>\n";
print "<p>$str</p>\n";
print "</body>\n";
print "</html>\n";