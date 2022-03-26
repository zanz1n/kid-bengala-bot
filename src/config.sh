##           IS IMPORTANT CHANGE THE
##         GUILD ID AND THE TOKEN IN THE
##      echo 'TOKEN="YOUR_BOT_TOKEN"' >>.env
##           OTHERWHISE WILL NOT WORK

echo 'TOKEN="YOUR_BOT_TOKEN"' >>.env
echo 'GUILDID="YOUR_GUILD_ID"' >>.env
read -p "Are you sure that you want to deploy that container?(y/n)" CONT
if [ $CONT = "y" ]; then
    sudo docker build -t kid-bengala/dockernode . && sudo docker run --rm -d kid-bengala/dockernode &&
        echo "[$(date +%T)] CONTAINER DEPLOYED"
else
    echo "------------------------------"
    echo "-         IMPORTANT:         -"
    echo "------------------------------"
    echo ""
    echo "You will need to run the aplication later, otherwhise will not work"
    echo ""
fi
