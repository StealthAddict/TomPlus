# -*- coding: utf-8 -*-

# Sample Python code for youtube.playlistItems.list
# See instructions for running these code samples locally:
# https://developers.google.com/explorer-help/code-samples#python

import os
import json

import google_auth_oauthlib.flow
import googleapiclient.discovery
import googleapiclient.errors

scopes = ["https://www.googleapis.com/auth/youtube.readonly"]

def main():
    # Disable OAuthlib's HTTPS verification when running locally.
    # *DO NOT* leave this option enabled in production.
    os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"

    api_service_name = "youtube"
    api_version = "v3"
    client_secrets_file = "client_secret_876000962187-bmfqhcf68a1nfn97gnpefhl99vs1c4kv.apps.googleusercontent.com.json"

    video_list = []

    # All you need is to fill out the FILE_TO_FILL and PLAYLIST_ID, then run
    FILE_TO_FILL = "data/tomsimons_results.txt"
    PLAYLIST_ID = "UUJdxdc4MqvZRD9oFYoCl7wQ"
    DATA = "data_results.json"

    # Get credentials and create an API client
    flow = google_auth_oauthlib.flow.InstalledAppFlow.from_client_secrets_file(
        client_secrets_file, scopes)
    credentials = flow.run_console()
    youtube = googleapiclient.discovery.build(
        api_service_name, api_version, credentials=credentials)

    def getNextPage(pgTok):
        request = youtube.playlistItems().list(
        part="contentDetails",
        maxResults=50,
        pageToken=pgTok,
        playlistId=PLAYLIST_ID
        )
        return request

    request = youtube.playlistItems().list(
        part="contentDetails",
        maxResults=50,
        playlistId=PLAYLIST_ID
    )
    response = request.execute()
    
    with open(DATA, 'w') as f:
            json.dump(response, f, ensure_ascii=False, indent=4)

    f_json = open(DATA, 'r')
    data = json.load(f_json)
    for i in data['items']:
        video_list.append(i['contentDetails']['videoId'])
    f_json.close()

    while 'nextPageToken' in data:
        pgTok = data['nextPageToken']
        request = getNextPage(pgTok)
        response = request.execute()
        with open(DATA, 'w') as f:
            json.dump(response, f, ensure_ascii=False, indent=4)


        f_json = open(DATA, 'r')
        data = json.load(f_json)

        for i in data['items']:
            video_list.append(i['contentDetails']['videoId'])            
        f_json.close()


    f_text = open(FILE_TO_FILL, 'w')
    for i in video_list:
        f_text.write(i)
        f_text.write("\n")
    f_text.close()


if __name__ == "__main__":
    main()