read -p "Are you sure that you want to deploy that container?" -n 1 -r
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    sudo docker build -t kid-bengala/dockernode . && sudo docker run --rm -d kid-bengala/dockernode
fi
