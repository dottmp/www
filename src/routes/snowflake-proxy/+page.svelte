<script>
	import AsciiPrint from '$lib/components/ascii-print.svelte';
	import * as Navbar from '$lib/components/navbar/index';

	const banner = `
           .                      +++          
           *=   .+               :*-           
            ++: +=            ..+*:            
             =+++        ..  .*++   ....       
              :++        ==  =+*-              
               =++  -    =++++++  -*:     .    
                +=***   :+*+*+*  :+=     +=    
              .-:*++.     - ..+.++=      +.    
               = *+.=     :....-=       -*.  .-
      .        +....:.   -.:..=.       =**++=  
  .. .++        +-..:. . ::..:      .=++:.     
   ==+*=        .::..:...:: ....-+++**.        
      .****++....::..:::::..::.:.=***=+*+=:-=-=
    .:=+*+-.:.............::.=..         ..  -+
**+=+=++*=+++=-.:-::......::.: .    .-        -
:           -++==:.:.:.....:...=-++-           
              .=....:..:......:.-              
          *==+:-:..::..::.:.....=.             
            +*=.:.:::...::.....:.**+.          
            +:...-=::*::-=:.:....*=            
           =+==:  ++==*. :-.:= ++*             
     :. - ++=    :*-.=-:==**=   +*=            
     .: :++     --.      -*+.  :.+*            
     :: -+    -  .         +.     ++           
      :=--*+=                   :+*+=          
   -+-+.:                      -   .*:         
    :+  :                            +..:      
   .*        ..                      .+.       
             .=.                      +        
                                      -        
`;

	let completed = $state(false);
</script>

<Navbar.Main />

<main class="container max-w-3xl py-28 md:m-auto">
	<div class="gap-x-14 md:flex md:flex-row">
		<header>
			<AsciiPrint
				class="md:h-109"
				text={banner}
				oncomplete={() => (completed = true)}
				chunkSize={24}
			/>
		</header>

		{#if completed}
			<div>
				<h1 class="mt-12 font-mono text-xs! leading-3 -tracking-widest md:mt-0">
					battle
					<span class="ml-10">censorship</span>
				</h1>
				<br />
				<p class="max-w-lg text-muted-foreground md:max-w-none">
					<a class="btn btn-link" href="https://snowflake.torproject.org/">Snowflake </a> is a tool
					made by the
					<a class="btn btn-link" href="https://www.torproject.org/">Tor project</a>. By keeping a
					snowflake proxy running in the background you will help tor users bypass censhorship and
					access the internet freely.
				</p>

				<br />
				<a href="https://snowflake.dottmp.dev" class="btn btn-link" tabindex="1">
					go to proxy &#8605
				</a>
			</div>
		{/if}
	</div>
</main>
