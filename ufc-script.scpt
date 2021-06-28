################################################################################
#            UFC Predictions & Stats Script Template - macOS BigSur	           #
#                                                                              #
# Change History                                                               #
# 28/06/2021  Etienne Costa                                                    #
#             				                                                   #
#             			                                                       #
#                                                                              #
################################################################################

tell application "iTerm"
	--Create initial window
	create window with default profile
	
	--Create a second and third tab in the initial window
	tell current window
			create tab with default profile
	        create tab with default profile
	end tell

	
	--API SERVER
	tell current session of tab 1 of current window
		write text "cd /Users/etiennecosta/Desktop/Mestrado/PLC/PRC/UFC-PREDICTIONS/ufc-api"
		write text "nodemon npm run start"
	end tell
	
	--APP SERVER
	tell current session of tab 2 of current window
		write text "cd /Users/etiennecosta/Desktop/Mestrado/PLC/PRC/UFC-PREDICTIONS/ufc-app"
		write text "npm run serve"
	end tell

	--RUN GraphDB
	tell current session of tab 3 of current window
		write text "open  /Applications/'GraphDB Free.app' "
	end tell

end tell
