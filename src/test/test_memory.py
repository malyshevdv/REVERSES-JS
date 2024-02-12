
from selenium.webdriver import Chrome
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By

#https://www.geeksforgeeks.org/create-a-screen-recorder-using-python/
#pip install numpy
#pip install pyautogui
#pip install opencv-python
import pyautogui
import cv2
import numpy as np


import pytest
from urllib.parse import urljoin
from time import sleep

@pytest.fixture
def base_url():
    return 'http://localhost:3000/'


@pytest.fixture
def driver():
    options = Options()

    options.add_experimental_option("excludeSwitches", ["enable-logging"])
    _driver = Chrome(options=options)

    #_driver = Chrome(executable_path = './chromedriver')
    #yield _driver
    return _driver
    #_driver.quit()

@pytest.fixture
def firstPage(driver, base_url):
    driver.get(urljoin(base_url, ""))

def makeScreenShort(out):
    img = pyautogui.screenshot()
    frame = np.array(img)
    frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    out.write(frame)
    cv2.imshow('Live', frame)

def pictureCount(driver):
    return int(driver.find_element(By.ID, "pole").get_attribute('picturecount'))

def test_game(firstPage, driver):

    #driver.start_desktop_mirroring('ddd')

    #resolution = (1920, 1080)
    #codec = cv2.VideoWriter_fourcc(*"XVID")
    #filename = "Recording.avi"
    #fps = 60.0
    #out = cv2.VideoWriter(filename, codec, fps, resolution)

    # Create an Empty window
    #cv2.namedWindow("Live", cv2.WINDOW_NORMAL)

    # Resize this window
    #cv2.resizeWindow("Live", 4, 2)

    #makeScreenShort(out)
    sleep(5)
    assert driver.title == 'MEMORY-TRAINER'
    assert driver.find_element(By.ID, "ResultTable").get_attribute('resultlines') == '0'

    elem = driver.find_element(By.XPATH, '//*[@id="root"]/div/div[2]/div[1]/div[5]/img')
    for _ in range(20):
        elem.click()

    assert pictureCount(driver)>=0

    elem = driver.find_element(By.XPATH, '//*[@id="root"]/div/div[2]/div[1]/div[4]/img')
    for _ in range(20):
        elem.click()

    assert pictureCount(driver) <= 28


    elem = driver.find_element(By.XPATH, '//*[@id="root"]/div/div[2]/div[1]/div[5]/img')
    while pictureCount(driver)>12:
        elem.click()





    print(driver.title)


    #print(driver.header)
    #sleep(1)
    elem = driver.find_element(By.ID, "ButtonRefresh")
    elem.click()

    #makeScreenShort(out)

    sleep(1)


    myList = []

    for i in range(pictureCount(driver)*2):
        cardId = f"card_{i}"
        pictId = f"pict_{i}"

        elem = driver.find_element(By.ID, cardId)
        elem.click()
        if elem.get_attribute('showcard') == 'true':
           #myList.append({'id' : cardId, 'picture' : ''})

           #elemPicture = elem.find_element(By.CLASS_NAME, 'unit-pict')
           elemPicture = driver.find_element(By.ID, pictId)

           picsrc = elemPicture.get_attribute('src')
           assert picsrc != ''
           myList.append({'id': cardId, 'picture': picsrc})

        #sleep(3)
    #if elem.get_attribute('showcard') == 'true':
    #    elem.click()

    for myPicture in set([item['picture'] for item in myList]):
        assert myPicture != ''

        nextPictureSet = list(filter(lambda a : a['picture'] == myPicture ,myList))

        #assert len(nextPictureSet) == 2
        for itemToRevers in nextPictureSet:
            elem = driver.find_element(By.ID, itemToRevers['id'])
            if elem.get_attribute('completed') != 'true':
                elem.click()
                sleep(1)




        #assert elem.get_attribute('showcard') == 'true'
    #assert elem.get_attribute('showcard') == 'true'



    assert driver.find_element(By.ID, "ResultTable").get_attribute('resultlines') == '1'
    #makeScreenShort(out)
    sleep(5)
    #out.release()
    #cv2.destroyAllWindows()