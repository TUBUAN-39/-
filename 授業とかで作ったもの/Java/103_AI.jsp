<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="java.time.LocalDate"%>
<%@ page import="java.time.LocalTime"%>
<%@ page import="java.time.DayOfWeek" %>
<%@ page import="java.time.format.TextStyle" %>
<%@ page import="java.util.Locale" %>
<!DOCTYPE html>
<html>
<head>
    <title>カレンダー</title>
    <style type="text/css">
    	.year {
    			border-bottom : 5px solid #79c06e;
    			font-size :1.5rem;
    			
    	}
    	 td ,th {
    			border :2px solid #24140e;
    			text-align :center;
    			margin : 7px;
    			background-color :#ffffff;
    					
    	}
    	.tableLine {
    		border :4px solid #1e90ff;
    		margin : 5px;
    	}
    	body {
    		background-color :#b2d8ff;
    		margin-right :0px;
    	}
    	span {
    		border-bottom : 3px solid #000000;
    		
    	}
    	.TableMargin  {
    		
    		border-spacing: 40px 20px;
    	}
    	
    	
    	
    </style>
</head>
<body>
    <h1>問題２ カレンダー</h1>

    <%		
			LocalDate nowdate = LocalDate.now();
			LocalTime nowtime = LocalTime.now();
			DayOfWeek dayOfWeek = nowdate.getDayOfWeek();
			String dayOfWeekJapanese = dayOfWeek.getDisplayName(TextStyle.FULL, Locale.JAPANESE);
			int Y = nowdate.getYear();
			int M = nowdate.getMonthValue();
			int D = nowdate.getDayOfMonth();
			int H = nowtime.getHour();
			int m =nowtime.getMinute();
			int s =nowtime.getSecond();
			//今月の最初を取得
			LocalDate nowmonth = LocalDate.of(Y,M,1);
			//先月を取得
			LocalDate pastmonth = LocalDate.of(Y,M-1,1);
     %>  
         <b>現在の日付・時刻：</b><span><%= Y %>年 <%= M %>月 <%= D %>日
          								<%= dayOfWeekJapanese  %> 
          								<%= H %>時 <%= m %>分 <%= s %>秒 
          							</span>
         <p><div class="year"><%= Y %>年 今月のカレンダー</div></p>
        <table>
        <tr><td>
        <table class="tableLine">
        		<tr><th colspan="7">今月（<%= M %>月）</th></tr>
                <tr><th>日</th><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th></tr>
        		
        		<%//月初の日付を出力
        		int emptydays = nowmonth.getDayOfWeek().getValue() % 7;
        		int ku_hakuDay = pastmonth.lengthOfMonth();
        		ku_hakuDay =ku_hakuDay - (emptydays - 1);
        		
        		 for (int i = 0; i < emptydays; i++) {%>
        		 <td <%if(i==0){%>style="background-color : #ea5532;"<%}
        		 		else {%>style="background-color :#7d7d7d;"<%}%>>
        		 		
        		 	<%= ku_hakuDay %>
        		 		
        		 </td>
        		 
        		<%ku_hakuDay = ku_hakuDay + 1;
        		
        		} %>
        		
        		<% // カレンダーの日付を出力
        			int month_31 =nowmonth.lengthOfMonth();
        			int day =1;
        			for(int i=0; i<month_31; i++){
        				
        				//下段に
        				if((emptydays + i) % 7 ==0){%>
        					
        					<tr></tr>
        					
        		       <%}%>
        				
        				<td  <%if(day==D){%>style="border : 3px dashed #ff4500;"<%}//今日の日付
        						if((emptydays + i) % 7 ==0){%>style="background-color : #ea5532;"<% }
        						if((emptydays + i) % 7 ==6){%>style="background-color : #2cb4ad;"<% }%>>
        					
        						<%= day %>
        					
        				</td>
        				<% 
        						day=day+1;
        				
        			}
        			// 最後の週の残りを日付で埋める
        			int nextDays = 1;
        			int nokoriDays = 7 - (emptydays + month_31) % 7;
        			for(int i=0; i<nokoriDays; i++){%>
        				
        				<td <% if(i+1==nokoriDays){%>style="background-color : #2cb4ad;"<%}%>><%= nextDays %></td>
        				<% nextDays= nextDays + 1;
        			}%>
        				
        			
        			
        </table>
         </td></tr>
		 </table>
       
        <!-- ここから年度のカレンダー -->
         <br>
         <% String sey_S = request.getParameter("se_year"); %>
        <% int a = Integer.parseInt(sey_S); %>
         
        
        
       <% 	
        %><div class="year"><%= a  %>年のカレンダー(変数で様々な年度を指定可能)<a href="sousin.jsp"><button size="20">入力へ戻る</button></a></div>


	<%
	//今年の最初を取得

	int b = 1;
	LocalDate ye23ar = LocalDate.of(a, b, 1);
	//昨年の12月を取得
	LocalDate past23month = LocalDate.of(a - 1, 12, 1);
	//月初を取得
	int empty23days = ye23ar.getDayOfWeek().getValue() % 7;
	//空白
	int ku23hakuDay = past23month.lengthOfMonth();
	//日付
	int m23h = ye23ar.lengthOfMonth();
	//各変数
	int d23ay = 1;
	int ns23days;
	int noko23ri;
	int trCount = 0;
	int FirdayCou;
	%>
		
			<table class="TableMargin">
			
			<tr></tr>
			
			<% for(int i=1; i<=12; i++){ %>
			
			<td>
			
			<table class="tableLine">
			
			<tr><th colspan="7"><%= i %>月</th></tr>
			
			 <tr><th>日</th><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th></tr>
			 
			<%//月初の日付を出力
				ku23hakuDay =ku23hakuDay - (empty23days - 1);
			
			 	for (int j = 0; j < empty23days; j++) {%>
			 		
			 		 <td <%if(j==0){%>style="background-color : #ea5532;"<%}
			 		 else {%>style="background-color :#7d7d7d;"<%}%>><%= ku23hakuDay %></td>
			
					<% ku23hakuDay = ku23hakuDay + 1;
				} 
			 	
			 	FirdayCou =empty23days;
			 	
				// カレンダーの日付を出力
				for(int z=0; z<m23h; z++){
					
					//下段に
					if((empty23days + z) % 7 ==0){%>
					
						<tr></tr>
						
						<%trCount =trCount+1;
					} 
					%><td <%
        				if((empty23days + z) % 7 ==0){%>style="background-color : #ea5532;<%if(m23h==d23ay){%>color :#191970; font-weight :900;<% }%>"<%}
        				if((empty23days + z) % 7 ==6){%>style="background-color : #2cb4ad;<% if(m23h==d23ay){%>color :#ff0000; font-weight :900;<% }%>"<% }
        				if(m23h==d23ay){%>style="color :#ff0000; font-weight :900"<%}%>>
        					
        					<%= d23ay %>
        					
        			</td>
        			
        					<% d23ay =d23ay + 1; %>
        		
        		<%} 
        		ns23days =1;
        		noko23ri = 7 - (empty23days + m23h) % 7;
        		
        		for(int c =0; c<noko23ri; c++ ){%>
        			<% if(noko23ri<7) {%>
        			<td <% if(c+1==noko23ri){%>style="background-color : #2cb4ad;"<%}
        			else {%>style="background-color :#202f55;"<%}%>><%= ns23days %></td>
        				
        				<% ns23days= ns23days + 1;
        				
        			}
        			
        		}
				if(trCount==4 || empty23days==0){%>
        				<tr></tr><% 
        				for(int o=1; o<=7; o++){%>
        					<td <%if(o==1){%>style="background-color : #ea5532;"<%}
        							else if(o==7){%>style="background-color : #2cb4ad;"<%}
        							else {%>style="background-color :#202f55;"<% }%>><%=  ns23days %></td><% 
        									
        							ns23days= ns23days + 1;
        							
        				}
        		}
        			trCount=0;	%>
        			
			</table>
			</td>
			<%
				b=b +1;
				ye23ar = LocalDate.of(a,b,1);
				past23month = LocalDate.of(a,b-1,1);
				empty23days = ye23ar.getDayOfWeek().getValue() % 7;
				ku23hakuDay = past23month.lengthOfMonth();
				m23h = ye23ar.lengthOfMonth();
				d23ay =1;
				
					//折り返し
				if(i==4 || i==8){%>
					
					<tr></tr>
					
				<%}
				
		 }%>
		 </table>
		
			
</body>
</html>
