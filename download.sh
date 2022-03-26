wget https://github.com/zanz1n/kid-bengala-bot/archive/refs/heads/main.zip &&
    unzip main.zip &&
    rm main.zip &&
    cd kid-bengala-bot-main/src

read -p "Are you sure that you want to deploy that container?(y/n)" CONT
if [[ ! $CONT = "y" ]]; then
    sudo docker build -t kid-bengala/dockernode . && sudo docker run --rm -d kid-bengala/dockernode
else
    echo "You will need to run the aplication later, otherwhise will not work"
fi
