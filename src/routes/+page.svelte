<script>
	import AsciiPrint from '$lib/components/ascii-print.svelte';
	import * as Navbar from '$lib/components/navbar/index';

	const banner = `
                  welcome             to
                                                 
                                                    www.dottmp


                                   ....             
                                  ..:..             
                                  .=+.              
                                 ..-+.              
                                 .:...              
                                 .-...              
                                .:.+                
      .=%..               .=.   .=.:                
       ..*@+..            .@:   .:..                
          .-@%-.          .%-  .=...    ..          
           ..=@@@-.       .%@..-:.+   .*+.          
             ..+@@@@:.    .#@..:-::  .@..   ...-::. 
                .=@@@@+.  .#@-.#@#..:@:...:-:::..   
                 ...#@@@%..*@@+@@#.@@##@@=-....     
                    .:%@@@@#@@@@@+@@@@@#:.          
            .--==-:.....*@@@@@@@@@@@@%.             
                ...:-=*@@@@@@@@@@@%...              
                  .:%@@@@@@@@@@@@@@@@%=.            
              ..*@@@@@@@@@@@@@@@@@@#:=+*=:::..      
         ..:#@@@@@@@@@@@@@@@@#@@:-@@*.. ....--:=:.  
     ...+%@@@@@%*=:...-@@@@...@@+..#@=.         ..  
   .-@@@@#...      ..-@@-    .@@* ..@@..            
.  :......         ..#-.     .%@#. ..%=.            
                  :..:       .*@%.   .%:.           
                 ..:.        .+@%.    .%:.          
                .:.           .@%.     .@+.         
                :..           .##.      .#.         
                              .:#.       ..         
                              .::.                  
                               .=.                  
                               ...                  






                    swedish developer






                              sorry to dissapoint you


             i'm just a regular guy who nerds over fonts and colors
`;

	const bannerSM = `
                  welcome             to

                                           www.dottmp

                                   ....             
                                  ..:..             
                                  .=+.              
                                 ..-+.              
                                 .:...              
                                 .-...              
                                .:.+                
      .=%..               .=.   .=.:                
       ..*@+..            .@:   .:..                
          .-@%-.          .%-  .=...    ..          
           ..=@@@-.       .%@..-:.+   .*+.          
             ..+@@@@:.    .#@..:-::  .@..   ...-::. 
                .=@@@@+.  .#@-.#@#..:@:...:-:::..   
                 ...#@@@%..*@@+@@#.@@##@@=-....     
                    .:%@@@@#@@@@@+@@@@@#:.          
            .--==-:.....*@@@@@@@@@@@@%.             
                ...:-=*@@@@@@@@@@@%...              
                  .:%@@@@@@@@@@@@@@@@%=.            
              ..*@@@@@@@@@@@@@@@@@@#:=+*=:::..      
         ..:#@@@@@@@@@@@@@@@@#@@:-@@*.. ....--:=:.  
     ...+%@@@@@%*=:...-@@@@...@@+..#@=.         ..  
   .-@@@@#...      ..-@@-    .@@* ..@@..            
.  :......         ..#-.     .%@#. ..%=.            
                  :..:       .*@%.   .%:.           
                 ..:.        .+@%.    .%:.          
                .:.           .@%.     .@+.         
                :..           .##.      .#.         
                              .:#.       ..         
                              .::.                  
                               .=.                  
                               ...                  





     swedish developer






                 sorry to dissapoint you


 i'm just a regular guy who nerds over fonts and colors  
`;
</script>

<Navbar.Main />

<main class="container m-auto flex max-w-xl items-center justify-center overflow-hidden sm:py-28">
	<AsciiPrint class="hidden  h-151  w-126 sm:block" text={banner} chunkSize={24} />
	<AsciiPrint class="block h-159  w-85.5 sm:hidden" text={bannerSM} chunkSize={24} />

	<h1 class="sr-only">
		swedish developer sorry to dissapoint you im just a regular guy that nerds over fonts and colors
	</h1>
</main>
