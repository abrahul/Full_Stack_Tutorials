package ArrayList;

import java.util.*;  
public class Array_list_iterator{  
public static void main(String args[]){  
 ArrayList<String> list=new ArrayList<String>();//Creating arraylist
 
 list.add("Mango");//Adding object in arraylist    
 list.add("Apple");    
 list.add("Banana");    
 list.add("Grapes"); 
 
 Iterator it=list.iterator();
 
 while(it.hasNext())
	 System.out.println(it.next());
}  
}  