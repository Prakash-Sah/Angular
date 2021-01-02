<%@ include file="/init.jsp" %>

<head>
	<base href="/">
	<link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
    integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk=" crossorigin="anonymous" />
</head>

<div id="<portlet:namespace />"></div>
<app-root></app-root>
<aui:script require="<%= mainRequire %>">
	main.default('#<portlet:namespace />');
</aui:script>